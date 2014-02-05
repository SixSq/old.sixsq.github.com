---
layout: article
title: On SlipStream and SSL
category: blog
image: /img/design/techcorner_category.png
author: Sébastien Fievet
comments: true
---

Lately, after updating SlipStream server to CentOS 6.5, we struggled
with OpenSSL when trying to deploy VMs. Each time we were deploying new
VMs on a cloud provider we were seeing the following error in our logs:

    [Errno 8] _ssl.c:504: EOF occurred in violation of protocol

The purpose of this post is to give a quick overview of how SlipStream
works, then highlight the issue and finally discuss the solution we put
in place.


The context
===========

When running a deployment on SlipStream, we first run a bootstrap
process. A simplified version of the bootstrap script execution is the
following:

1. download slipstream-client from secure URLs
2. setup the slipstream-client
3. invoke slipstream-client commands to orchestrate deployment

Both the bootstrap script and SlipStream client are Python script. The
bootstrap script uses `urllib2` to communicate through HTTPS whereas the
SlipStream client relies on `httplib2`. The choice of `urllib2` for the
bootstrap script was to minimise dependencies.


Troubleshooting
===============

First, we looked at the OpennSSL version used in both client and server.

On the SlipStream server running CentOS 6.5:

    $ openssl version
    OpenSSL 1.0.1e-fips 11 Feb 2013

On the orchestrator running Ubuntu 12.04:

    $ openssl version
    OpenSSL 1.0.1 14 Mar 2012

Then, after a quick investigation, we found an [anwser on StackOverflow](http://stackoverflow.com/a/18108668)
leading to a [referenced issue](http://bugs.python.org/issue11220) in Python tracker.

Looking at the documentation of [ssl.wrap_socket](http://docs.python.org/2/library/ssl.html#ssl.wrap_socket)
 – used behind the scenes by both `urllib2` and `httplib2` – we found
the root of the problem: SlipStream server is setup to deal with SSLv3
protocol only whereas Python is using [SSLv23](http://docs.python.org/2/library/ssl.html#ssl.PROTOCOL_SSLv23)
by default, and the two  are incompatible according to the protocol
version table.

Confirming the SSLv3 only behaviour of the server from the client side is easy::

    $ openssl s_client -connect 185.19.28.152:443
    CONNECTED(00000003)
    140596833552032:error:140790E5:SSL routines:SSL23_WRITE:ssl handshake failure:s23_lib.c:177:
    [...]

    $  openssl s_client -connect 185.19.28.152:443 -ssl3
    CONNECTED(00000003)
    [...]
    New, TLSv1/SSLv3, Cipher is ECDHE-RSA-AES256-SHA
    Server public key is 2048 bit
    Secure Renegotiation IS supported
    Compression: NONE
    Expansion: NONE
    SSL-Session:
        Protocol  : SSLv3
        Cipher    : ECDHE-RSA-AES256-SHA
        Session-ID: 52EFBFD1857B17D95CA66446C3D7BD4085869F813762ADFB867C05254CA95062
        Session-ID-ctx:
        Master-Key: 0318F3920A3CAE0A8EA1C499B7C3CA179D1E8CF9BF52E6C13B8FFAD934DC5E2672415F1A56CFA85A2A9437070B1FC603
        Key-Arg   : None
        PSK identity: None
        PSK identity hint: None
        SRP username: None
        Start Time: 1391443921
        Timeout   : 7200 (sec)
        Verify return code: 21 (unable to verify the first certificate)


The solution
============

Once learned that, our first attempt was to provide protocol switching.
The main idea was to  first initiate a connection with SSLv23 protocol
(default version), then upgrade to SSLv3 and as a last resort, use TLSv1
if an error was raised with a prior connection.

Due to the extensibilty of `urllib2`, we just needed to create a custom
`httplib.HTTPSConnection` used by a custom `urllib2.HTTPSHandler` and then
register the handler to `urllib2`.

On the other hand, `httplib2` is not really extensible. Since we're
already vendorizing it in our project, we decided to directly patch it
instead of relying on a monkey patch approach.
(We're really looking forward to ditch `httplib2` in favor of
`requests` in the near future, shipping our [custom adapter](http://docs.python-requests.org/en/latest/user/advanced/#example-specific-ssl-version)
dealing with SSLv3 protocol.)

See the [commit](https://github.com/slipstream/SlipStreamClient/commit/5
33733dfa9863f1379a46ed2fb14b5ad9f336d04) in our GitHub repository for
the implementation.

So, we're done, right?

Wrong!

After testing the patch, we were still seeing the SSL
error. Attempts to upgrade protocol version were failing.

A closer look at the output of `gnutls` and `openssl` command on Ubuntu
12.04 (used for orchestrator instances by default at this time of
writing) gave us a hint:

    $ gnutls-cli-debug 185.19.28.152 -p 443
    Resolving '185.19.28.152'...
    Connecting to '185.19.28.152:443'...
    Checking for SSL 3.0 support... yes
    Checking whether %COMPAT is required... no
    Checking for TLS 1.0 support... yes
    Checking for TLS 1.1 support... yes
    Checking fallback from TLS 1.1 to... N/A
    Checking for TLS 1.2 support... yes
    Checking whether we need to disable TLS 1.0... N/A
    Checking for Safe renegotiation support... yes
    Checking for Safe renegotiation support (SCSV)... yes
    [...]

    $ openssl s_client -connect 185.19.28.152:443
    [snip]
    New, (NONE), Cipher is (NONE)
    Secure Renegotiation IS NOT supported
    Compression: NONE
    Expansion: NONE

    $ openssl s_client -connect 185.19.28.152:443 -ssl3
    [snip]
    New, TLSv1/SSLv3, Cipher is ECDHE-RSA-AES256-SHA
    Server public key is 2048 bit
    Secure Renegotiation IS supported
    Compression: NONE
    Expansion: NONE
    [...]

Catch it? Renegotiation is not supported for SSL protocol SSLv2, as
mentioned in the OpenSSL [Secure Renegotiation](https://www.openssl.org/docs/ssl/SSL_CTX_set_options.html#SECURE_RENEGOTIATION) documentation.

Looking at our implementation, we're trying to upgrade SSL protocol
using the same open connection. But since the first negotiation is
done with SSLv2 any further renegotiation with an upgraded protocol will
fail.

To handle that issue there are two solutions:

* closing connection when SSLv23 attempt failed, then open a
  new connection and try to upgrade to SSLv3 or TLSv1 otherwise;

* only deal with SSLv3

We finally chose the latter for the sake of simplicity.

So we [rewrote our patch](https://github.com/slipstream/SlipStreamClient/commit/00f70229ae2f09cbbb221836363e9cb0daf2cd35)
to enforce SSLv3 protocol from the beginning.

That final patch resolved our issue with SSL and all operations are
running as expected.

As a corollary, starting from now, any connector developer using Python
bindings should be aware of using SSL protocol SSLv3 when communicating
with SlipStream server. For example, we already
[proposed a patch for Stratuslab](https://github.com/StratusLab/client/pull/116).
