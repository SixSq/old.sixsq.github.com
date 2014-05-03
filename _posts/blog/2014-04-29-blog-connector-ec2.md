---
layout: article
title: Amazon EC2 SlipStream Connector Configuration
category: blog
image: /img/design/slipstream_category.png
author: Marc-Elian Bégin / Lionel Schaub
comments: true
---


Here are instructions on how to configure the SlipStream Amazon EC2 connector.
This connector is distributed by SixSq under a commercial license and is available for purchase.
Please refer to the [pricing page](/products/slipstream-pricing.html) for details or please feel free to contact the [SlipStream Support team](mailto:support@sixsq.com) with any questions on how the SlipStream Amazon EC2 connector can be beneficial to you.


Prerequisite
----

This installation recipe assumes that you have already installed the SlipStream service on the same server. 
For details on how to install the service, please refer to the 
[online documentation](https://slipstream.sixsq.com/html/administrator-manual.html).


Install the connector
----

Once you have purchased a new commercial connector, SixSq will provide you with a specific yum configuration.
Once your yum configuration is in place, you can install the connector executing the following command:

	yum install slipstream-connector-ec2

With the software installed, you need to restart the SlipStream service in order for it to take the new connector into account:

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

	cloud.connector.class = com.sixsq.slipstream.connector.aws.Ec2Connector
	
	...

By default, the connector instance will be named *ec2*. You can change the name of the
connector by prepending the name followed by a semi colon (i.e. `:`). Here is an example:

	cloud.connector.class = my-ec2:com.sixsq.slipstream.connector.aws.Ec2Connector

You can also instantiate the connector several times (in compliance with your license) by
comma separating the connector string. Here is an example:

	cloud.connector.class = my-ec2-1:com.sixsq.slipstream.connector.aws.Ec2Connector, my-ec2-2:com.sixsq...

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

<p align="center"><img src="/img/content/blogs/doc_EC2_ss_system_parameters.png" alt="SlipStream Configuation - EC2 section" class="shadow"  width="900" /></p>


**EC2 region**

The EC2 region define where your EC2 instances will be deployed.
Some parameters may be different between regions (e.g. image id: ami-...).
If you want to use multiples regions concurrently, you will need to instantiate multiples times this 
connector.


**Cloud Client Connector**

This field correspond to the URL where the Orchestrator will download the tarball of the connector for the SlipStream Client.
In a default installation the URL will be `https://ip_or_hostname/downloads/ec2client.tgz` where `ip_or_hostname` correspond to the IP or the hostname of your SlipStream Server.


**Orchestrator security group**

The EC2 security group should allow TCP connexions from the Orchestrator itself to the SlipStream server and to the EC2 API.
The default security group named `default` should normally work perfectly.


**Image Id of the Orchestrator**

The image id of the Orchestrator needs to match a Linux image with `wget` and `python` installed.
An Ubuntu 12.04 will do the job perfectly (at the time or writing, for the region `eu-west-1` the image id is `ami-a0dd3dd7`).
EC2 image ids start with `ami-`. 
You can found them in the EC2 web interface.


**Quota**

The quota is SlipStream feature which enable the SlipStream administrator to set a default quota for all users of a specified connector.
You can also override this value per user in the user profile.
If this feature is disabled in the *SlipStream Advanced* section of this page, you can leave this field blank.


**Orchestrator instance type**

The instance type is a name which is linked to a hardware specification defined by EC2.
You can find the list of all possible values [here](https://aws.amazon.com/ec2/instance-types/).
The Orchestrator doesn't need a big amount of resources so you can choose a small instance type (like `t1.micro` or `m1.small`).


Configure native images for this connector instance
----

Now you need to update SlipStream native images to add the image id and some parameters for OpenStack.

Please go on a SlipStream base image (e.g. Ubuntu 12.04) and click on the *Edit* button.
Add the image id for EC2 in the section named *Cloud Image Identifiers and Image Hierarchy*.

And then configure the default amount of CPU and RAM on the tab *ec2* (or the name you gave your
EC2 connector earlier) of the section *Cloud Configuration*.


User credentials
----

Now that the connector is configured and the native images updated, inform your users that they need to configure their credentials for EC2 in their user profile to take advantage of your new connector.


<span class='contact-us-placeholder'></span>



