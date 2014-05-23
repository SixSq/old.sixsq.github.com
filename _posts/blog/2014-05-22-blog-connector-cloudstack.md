---
layout: article
title: How to Configure Your CloudStack SlipStream Connector
category: blog
image: /img/design/slipstream_category.png
author: Sébastien Fievet / Lionel Schaub
comments: true
---


The following instructions will guide you through the procedure of configuring
a SlipStream CloudStack connector, such that you can add your CloudStack cloud
to the list of clouds your SlipStream can talk to.


## Prerequisite

This installation recipe assumes that you have already installed the
SlipStream service on the same server. For details on how to install the
service, please refer to the [online documentation].

[online documentation]: https://slipstream.sixsq.com/html/administrator-manual.html

## Install the connector

The CloudStack connector is currently bundled with the SlipStream service.
Your therefore don't need to do anything special to have access to the
connector software, once you have installed the service.


## Load the connector in SlipStream

Once the connector software is installed, you can configure SlipStream to load
this connector by either setting the parameter in the configuration file (i.e.
`/etc/slipstream/slipstream.conf`) or via the web interface.


### Configuration file

The list of connector instances SlipStream uses is defined by the
`cloud.connector.class` configuration parameter:

    # cat /etc/slipstream/slipstream.conf
    # SlipStream(tm) Server configuration file
    ...

    cloud.connector.class = com.sixsq.slipstream.connector.cloudstack.CloudStackConnector

    ...

By default, the connector instance will be named *cloudstack*. You can change
the name of the connector by prepending the name followed by a semi colon
(i.e. `:`). Here is an example:

    cloud.connector.class = exoscale-ch-gva:com.sixsq.slipstream.connector.cloudstack.CloudStackConnector

You can also instantiate the connector several times (in compliance with your
license) by comma separating the connector string. Here is an example:

    cloud.connector.class = my-os-1:com.sixsq.slipstream.connector.cloudstack.CloudStackConnector, my-os-2:com.sixsq...

Once the configuration file is set, login to SlipStream as a privileged user
and load the configuration. The configuration page is available by clicking on
the spanner icon at the top right of the screen. To load the changes made in
the configuration file, simply click on the **Reload Configuration File**
button.  You should then see the changed value in the *SlipStream Basics*
section.


### Configuration page

You can also define which connector to load, as per the Configuration file
section above, using the web user interface.  Once logged-in with a privileged
user (e.g. *super*), open the configuration page by clicking on the spanner
icon at the top right of the screen.  Then open the *SlipStream Basics*
section and drop in the value of the configuration, as per described in the
section above. Here is a screenshot of the parameter to define:

<p align="center"><img src="/img/content/blogs/cloud-config-param-screenshot2.png" alt="SlipStream Configuation - Basics section"  class="shadow" width="900" /></p>

**Don't forget to save the configuration!**

Now that the connector is loaded, you need to configure it.

**Super/privileged user**

By default, SlipStream configures a privileged user called *super*, with the
default password `supeRsupeR`. **Please make sure you change this default
password.**


## Configure the connector instance in SlipStream

Once the connector is loaded, you need to configure the connector. While you
can also define these parameters using the configuration file, we only show
here how to do it using the web user interface.

With the connector loaded in SlipStream, a new section in the configuration
page will appear, allowing you to configure how the connector is to
communicate with the IaaS cloud endpoint.

<p align="center"><img src="/img/content/blogs/doc_cloudstack_ss_system_parameters.png" alt="SlipStream Configuation - CloudStack section" class="shadow"  width="900" /></p>

*Note: All the CloudStack API examples come from [cloudmonkey] configured with
[Exoscale Open Cloud API] endpoint.*

[cloudmonkey]: https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+cloudmonkey+CLI
[Exoscale Open Cloud API]: https://community.exoscale.ch/api/compute/


### Zone

The availability zone where the virtual machines will be provisionned.

Use the `name` value from the [listZones] results:

    > list zones
    count = 1
    zone:
    name = ch-gva-2
    id = 1128bd56-b4d9-4ac6-a7b9-c715b187ce11
    [...]

[listZones]: https://cloudstack.apache.org/docs/api/apidocs-4.0.0/domain_admin/listZones.html

### Image Id of the Orchestrator

The image id of the Orchestrator needs to match a Linux image with `wget` and
`python` installed. An Ubuntu 12.04 will do the job perfectly.

Use the `id` value from the [listTemplates] results:

    > list templates templatefilter=featured
    count = 37
    template:
    id = 8c7e60ae-3a30-4031-a3e6-29832d85d7cb
    name = Linux Ubuntu 12.04 LTS 64-bit
    [...]

For Exoscale you can browse the [available templates] and choose the one that
suits your need.

[listTemplates]: https://cloudstack.apache.org/docs/api/apidocs-4.0.0/domain_admin/listTemplates.html
[available templates]: https://www.exoscale.ch/open-cloud/templates/


### Flavor of the Orchestrator

The flavor (instance type) is a name which is linked to a hardware
specification defined by the Cloud. The Orchestrator doesn't need a big amount
of resources so you can choose a small flavor (like 1 CPU and 512 MB of RAM).

Use the `name` value from the [listServiceOfferings] results:

    > list serviceofferings
    count = 7
    serviceoffering:
    name = Micro
    id = 71004023-bb72-4a97-b1e9-bc66dfce9470
    [...]

[listServiceOfferings]: https://cloudstack.apache.org/docs/api/apidocs-4.0.0/domain_admin/listServiceOfferings.html

### Quota

The quota is SlipStream feature which enable the SlipStream administrator to
set a default quota for all users of a specified connector. You can also
override this value per user in the user profile. If this feature is disabled
in the *SlipStream Advanced* section of this page, you can leave this field
blank.


### Service endpoint

The CloudStack API Endpoint used by SlipStream to communicate with the
CloudStack CLoud.

Example: `https://api.exoscale.ch/compute`


## Configure native images for this connector instance

Now you need to update SlipStream native images to add the image id and some
parameters for CloudStack.

Please go on a SlipStream base image (e.g. Ubuntu 12.04) and click on the
*Edit* button. Add the image id for CloudStack in the section named *Cloud
Image Identifiers and Image Hierarchy*.

And then configure the default amount of CPU and RAM on the tab *CloudStack*
(or the name you gave your CloudStack connector earlier) of the section *Cloud
Configuration*.


## User credentials

Now that the connector is configured and the native images updated, inform
your users that they need to configure their credentials for CloudStack in
their user profile to take advantage of your new connector.


<span class='contact-us-placeholder'></span>

