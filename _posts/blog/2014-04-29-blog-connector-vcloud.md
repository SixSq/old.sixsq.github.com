---
layout: article
title: VMWare vCloud SlipStream Connector Configuration
category: blog
image: /img/design/slipstream_category.png
author: Marc-Elian Bégin / Lionel Schaub
comments: true
---

Here are instructions on how to configure the SlipStream VMWare vCloud connector.
This connector is distributed by SixSq under a commercial license and is available for sale.
Refer to the [pricing page](/products/slipstream-pricing.html) for details.


Prerequisite
----

This installation recipe assumes that you have already installed the SlipStream service on the same server. 
For details on how to install the service, please refer to the 
[online documentation](https://slipstream.sixsq.com/html/administrator-manual.html).


Install the connector
----

With each new commercial connector purchased, SixSq will provide you with a specific yum configuration.
Once your yum configuration is in place, you can install the connector executing the following command:

	yum install slipstream-connector-vcloud

With the software installed, you need to restart the SlipStream service in order for it to take into account
the new connector:

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
	...

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
file, simply click on the **Reload Configuration File** button.  You should then see the changed value in the
*SlipStream Basics* section.


**Configuration page**

You can also define which connector to load, as per the Configuration file section above, using the web user
interface.  Once logged-in with a privileged user (e.g. *super*), open the configuration page by clicking on the spanner icon at the top right of the screen.  Then open the *SlipStream Basics* section and drop in the
value of the configuration, as per described in the section above. Here is a screenshot of the parameter to
define:

<p align="center"><img src="/img/content/blogs/cloud-config-param-screenshot.png" alt="SlipStream Configuation - Basics section"  class="shadow" width="900" /></p>

**Don't forget to save the configuration!** Now that the connector is loaded, you need to configure it.


**Super/privileged user**

By default, SlipStream configures a privileged user called *super*, with the default password `supeRsupeR`.
Please make sure you change this default password.


Configure the connector instance in SlipStream
----

Once the connector is loaded, you need to configure the connector.  While you can also define these parameters
using the configuration file, we only show here how to do it using the web user interface.

With the connector loaded in SlipStream, a new section in the configuration page will appear, allowing
you to configure how the connector is to communicate with the IaaS cloud endpoint.

<p align="center"><img src="/img/content/blogs/doc_vCloud_ss_system_parameters.png" alt="SlipStream Configuation - vCloud section" class="shadow"  width="900" /></p>


**Service endpoint**

The service endpoint is the URL SlipStream will use to communicate with vCloud.
You should ask your vCloud adminitrator to give you this value.
But most of time this value correspond to the root part of the URL you are using to access vCloud web interface with `/api` appended.


**Virtual Cata Center**

The VDC name can be found on the vCloud web interface (please see the image below).
First click on the *Administration* tab and on *Virtual Datacenters*.
Then you will see a list with all VDC your account has access to.
If you need to configure multiple VDC, you will have to instanciate multiple connectors.

<p align="center"><img src="/img/content/blogs/doc_vCloud_vdc.png" alt="vCloud web interface - Virtual Datacenters" class="shadow"  width="750" /></p>
    

**Quota**

The quota is SlipStream feature which enable the SlipStream administrator to set a default quota for all users of a specified connector.
You can also override this value per user in the user profile.
If this feature is disabled in the *SlipStream Advanced* section of this page, you can leave this field blank.


**Cloud Client Connector**

This field correspond to the URL where the Orchestrator will download the tarball of the connector for the SlipStream Client.
In a default installation the URL will be `https://ip_or_hostname/downloads/vcloudclient.tgz` where `ip_or_hostname` correspond to the IP or the hostname of your SlipStream Server.


**Image Id of the Orchestrator**

For vCloud an image id correspond to the (unique) name of a vApp with only one VM inside.
The image id of the Orchestrator needs to match a Linux image with `wget` and `python` installed.
An Ubuntu 12.04 will do the job perfectly.

To find the image id go on the vCloud web interface and click on the *Catalogs* tab and then browse catalogs to find an appropriate image.

<p align="center"><img src="/img/content/blogs/doc_vCloud_imageId.png" alt="vCloud web interface - Catalog" class="shadow"  width="750" /></p>


**Orchestrator instance size**

The instance size is a coma separated list of two elements.
The first is the number of CPU cores the Orchestrator instance will have.
The second is the amount of RAM in GB the Orchestrator will have.
The Orchestrator doens't need a big amount of resources so 1 CPU and 1 GB of RAM should be enough - e.g. `(1,1)`.


Configure native images for this connector instance
----

Now you need to update SlipStream native images to add the image id and some parameters for vCloud.

Please go on a SlipStream base image (e.g. Ubuntu 12.04) and click on the *Edit* button.
Add the image id for vCloud in the section named *Cloud Image Identifiers and Image Hierarchy*.

And then configure the default amount of CPU and RAM on the tab *vCloud* (or the name you gave your
OpenStack connector earlier) of the section *Cloud Configuration*.

<p align="center"><img src="/img/content/blogs/doc_vCloud_image_parameters.png" alt="SlipStream Image - edit mode" class="shadow"  width="900" /></p>


User credentials
----

Now that the connector is configured and the native images updated, inform your users that they need to configure their credentials for vCloud in their user profile to take advantage of your new connector.


<span class='contact-us-placeholder'></span>



