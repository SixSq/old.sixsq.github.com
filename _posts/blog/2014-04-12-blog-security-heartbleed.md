---
layout: article
title: Heartbleed Vulnerability
category: blog
image: /img/design/slipstream_category.png
author: Louise Merifield
comments: true
---

**Security issues: SSL & Heartbleed Vulnerability**

On April 7, 2014 information was released about a new vulnerability ([CVE-2014-0160](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0160)) in [OpenSSL](https://www.openssl.org/), the cryptography library that powers the vast majority of private communication across the Internet. This library maintains privacy between servers and clients, and confirms that Internet servers are who they say they are.

This vulnerability, known as Heartbleed, would allow an attacker to steal the keys that protect communication, user passwords, even the system memory of a vulnerable server. This represents a major risk to almost every service provider on the Internet, including SlipStream.


**What is SixSq doing about this?**

We have taken the following actions to mitigate the issue. We are happy to report that:

* SlipStream's infrastructure has been updated to the latest version of OpenSSL fixing the Heartbleed bug and all related services have been restarted.
* The SSL certificate securing the [SlipStream SaaS](https://slipstream.sixsq.com) has been revoked and a new certificate has been deployed.

**What should you do about this?**

Although we have no reason to believe that any part of our service has been compromised, as a matter of best practice we would like to recommend that all our users  [logout](https://slipstream.sixsq.com/logout) from SlipStream and then change their password from their preferences page.

Feel free to contact the [SlipStream Support team](mailto:support@sixsq.com) with follow up questions.

