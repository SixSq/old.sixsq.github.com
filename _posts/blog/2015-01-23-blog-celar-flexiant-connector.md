---
layout: article
title: More Ways to Connect to the Cloud
category: blog
image: /img/design/slipstream_category.png
author: Konstantin Skaburskas
comments: true
---
**Flexiant FCO SlipStream connector**

SixSq and [Flexiant](http://www.flexiant.com/) are happy to announce the availability of the [SlipStream](http://sixsq.com/products/slipstream.html) cloud connector for FCO - Flexiant [Cloud Orchestrator](http://www.flexiant.com/flexiant-cloud-orchestrator/).

The connector was [developed](http://sixsq.com/blog/2014/03/13/blog-slipstream-within-celar.html) as part of the [CELAR project](http://www.celarcloud.eu/), supported by the EC’s [Seventh Framework Program](http://cordis.europa.eu/fp7/home_en.html), which in turn aims to develop an elasticity platform for cloud applications.

The connector covers the standard set of capabilities that fully integrate it with all the workflows available in SlipStream:

* Run image
* Build image
* Start/terminate deployment

The connector was tested on real applications in the CELAR project as part of scalability workflows utilising the "mutable run" feature of SlipStream. It was officially released on November 14th 2014, when CELAR announced the public availability of the first version of the [CELAR Elasticity Platform](http://www.celarcloud.eu/2014/uncategorized/798).

The code for the connector is open sourced and available [here](https://github.com/CELAR/SlipStreamConnector-Fco).

The pre-build binaries are available as RPMs for the RedHat-based systems from CELAR's public YUM repository. Click [here](http://snf-175960.vm.okeanos.grnet.gr/yum/) for details on enabling the CELAR Releases repository. To install the connector on the pre-installed SlipStream server please run:

yum install slipstream-connector-fco slipstream-connector-fco-python

Once the connector is installed, you should instantiate its instances and configure them via SlipStream’s standard https://<your-instance>/configuration resource.


For developing a cloud connector for SlipStream please see:
[Development of Cloud connector for SlipStream](http://sixsq.com/blog/2013/09/30/blog-slipstream-cloud-connector-development.html) and [Contributing to SlipStream](http://sixsq.com/blog/2014/04/28/blog-contributing-to-slipstream.html) 

Feel free to contact the [SlipStream Support team](mailto:support@sixsq.com) with follow up questions.

