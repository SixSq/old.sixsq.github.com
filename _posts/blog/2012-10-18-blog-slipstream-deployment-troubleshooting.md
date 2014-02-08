---
layout: article
title: Troubleshooting deployment recipes in SlipStream
category: blog
image: /img/design/slipstream_category.png
author: Marc-Elian Bégin
comments: true
---

Troubleshooting SlipStream deployment is simple and quick, but some of the tips and tricks
are not known to all. I hope to clarify this now.

The perhaps default reflex when a deployment fails is to modify the deployment and re-run
the deployment. For trivial changes, this is cool, but for most cases, this takes too
long.

Instead, what you can do is to set your user profile such that if a deployment fails,
the deployment keeps on running.  This will prevent SlipStream from terminating the
VMs once the deployment is completed.

With this update done, ssh into the VM you want to fix.  SlipStream tries hard not to
disrupt the VMs it deploys.  Therefore, the environment required for the SlipStream
client to work must be explicitly set.  To set the environment, on each VM, run the 
following:

    $ source /opt/slipstream/client/slipstream.setenv

From this point on, you will be able to re-run the deployment execution script.  This script is available in:

    $ cat /tmp/tmp*

However, if your deployment has failed, any further calls to SlipStream commands such as *ss-get* and *ss-set* will also fail. This is behaviour is there to ensure that failing deployment fail
quickly, without hanging until timeouts occur.

For reseting the deployment state issue the following command:

    $ ss-abort --cancel

From this point on, you should be able to edit the execution script, save it and execute
it, or snippets of it.  Once the script is working, you can then paste it back in 
SlipStream, and re-run the deployment.

Hope this helps.