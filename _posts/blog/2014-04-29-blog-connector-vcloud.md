---
layout: article
title: VMWare vCloud SlipStream Connector Configuration
category: blog
image: /img/design/slipstream_category.png
author: Marc-Elian Bégin / Lionel Schaub
comments: true
---

Here are instructions on how to configure the SlipStream VMWare vCloud connector.  This connector
is distributed by SixSq under a commercial license and is available for sale.  Refer to the [pricing
page](/products/slipstream-pricing.html) for details.

Prerequisite
----

This installation recipe assumes that you have already installed the SlipStream server on the same
server. For details
on how to install the server, please refer to the 
[online documentation](https://slipstream.sixsq.com/html/administrator-manual.html).

Install the connector
----

With each new commercial connector purchased, SixSq will provide you with a specific yum configuration.
Once your yum configuration is in place, you can install the connector executing the following command:

	yum install slipstream-connector-vcloud

With the software is installed, you need to restart the SlipStream service in order for it to take
the new connector into account:

	service slipstream restart

Now we need to configure SlipStream to take advantage of the new connector.


Load the connector in SlipStream
----

Once the connector software is installed, you can configure SlipStream to load this connector
by either setting the parameter in the configuration file (i.e. `/etc/slipstream/slipstream.conf`)
or via the web interface.


**Configuration file**

The list of connector instances SlipStream uses is defined by the `cloud.connector.class` configuration
parameter:

	# cat /etc/slipstream/slipstream.conf
	# SlipStream(tm) Server configuration file
	slipstream.registration.enable = true

	cloud.connector.class = com.sixsq.slipstream.connector.vcloud.VCloudConnector
	
	...

By default, the connector instance will be named *vcloud*. You can change the name of the
connector by prepending the name followed by a semi colon (i.e. `:`). Here is an example:

	cloud.connector.class = my-vcloud:com.sixsq.slipstream.connector.vcloud.VCloudConnector

You can also instantiate several times the connector (in compliance with your license) by
comma separating the connector string. Here is an example:

	cloud.connector.class = my-vcloud-1:com.sixsq.slipstream.connector.vcloud.VCloudConnector, my-vcloud-2:com.sixsq...

Once the configuration file is set, login to SlipStream as a privileged user and load the configuration. The configuration
page is available by clicking on the spanner icon at the top right of the screen. To load the changes made in the configuration
file, simply click on the `Reload Configuration File` button.  You should then see the changed value in the
*SlipStream Basics* section.


**Configuration page**

You can also define which connector to load, as per the Configuration file section above, using the web user
interface.  Once logged-in with a privileged user (e.g. *super*), open the configuration page by clicking on the
spanner icon at the top right of the screen.  Then open the *SlipStream Basics* section and drop in the
value of the configuration, as per described in the section above. Here is a screenshot of the parameter to
define:

<p align="center"><img src="/img/content/blogs/cloud-config-param-screenshot.png" alt="NuvlaBox overview" width="900" /></p>

Don't forget to save the configuration!

Now that the connector is loaded, you need to configure it.


**Super/privileged user**

By default, SlipStream configures a privileged user called *super*, with the default password `supeRsupeR`.
Please make sure you change this default password.


Configure the connector instance in SlipStream
----

Once the connector is loaded, you need to configure the connector.  While you can also define these parameters
using the configuration file, we only show here how to do it using the web user interface.

With the connector loaded in SlipStream, a new section in the configuration page will appear, allowing
you to configure how the connector is to communicate with the IaaS cloud endpoint.

<p align="center"><img src="/img/content/blogs/cloud-config-param-screenshot.png" alt="NuvlaBox overview" width="900" /></p>


Configure native images for this connector instance
----

<span class='contact-us-placeholder'></span>


