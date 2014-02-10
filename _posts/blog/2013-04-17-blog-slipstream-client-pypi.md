---
layout: article
title: SlipStream Client is now in PyPi
category: blog
image: /img/design/slipstream_category.png
author: Konstantin Skaburskas
comments: true
---

The SlipStream Client is now published to PyPi and can therefore be installed with:

    pip install httplib2 slipstream-client

This installs `ss-*` commands and provides possibilities to:

* remotely invoke Deployments with `ss-execute` command
* debug runs (running Deployments and Image builds/runs) with `ss-{display,get,set,abort}`
* edit modules with `ss-module-{get,put}` as xml
* view user and run with `ss-run-get` and `ss-user-get` as xml

For detailed information on the `ss-*` commands, please refer to the [online manual](https://slipstream.sixsq.com/html/reference-manual.html#chap-client-command-reference).
