---
layout: article
title: SlipStream within CELAR
category: blog
image: /img/design/slipstream_category.png
author: Louise Merifield / Konstantin Skaburskas
comments: true
---

**Using SlipStream for Multi-cloud IaaS provisioning within CELAR**

SixSq participates in the FP7 EU project [CELAR - Automatic, Multi-Grained elasticity-provisioning for the cloud](http://www.celarcloud.eu/).

One of the challenges CELAR has set itself, as part of its goal to develop elastic resource provisioning for cloud applications, is to be able to seamlessly provision complex multi-tier user applications on different clouds. However, to achieve this, the team had to address the issue that different clouds have different IaaS APIs. SixSq was tasked with finding a solution for this. We decided to tackle the problem by using a provisioner that could abstractly describe requirements at the cloud level and provision the required resources, which is where SlipStream comes into play.  [Slipstream](http://sixsq.com/products/slipstream.html) does exactly that and here are a few details on how it does it.

First, let's look at the role SlipStream fulfils to deliver multi-cloud capabilities.

**SlipStream’s role:**

* Provide a number of IaaS connectors backed up by a respective cloud driver
* Use the connector to maintain the required high-level SlipStream user/image/deployment parameters and map them to the cloud driver
* Provide a number of base functions for standard driver implenmentations: jclouds, libcloud, custom drivers
* Provide a pluggable connector architecture 

For more technical details on writing a connector for SlipStream, take a look at [this blog](/blog/2013/12/17/blog-connector-development-and-state-machine.html) on the SixSq website.

From that point on, users have to provide the following information, generally through the SlipStream UI.

**The user’s role:**

* Define Images and Deployments
* Provide cloud credentials for the configured cloud connectors
* Run the deployment
* Monitor the state of the deployment

Via its REST API, SlipStream can then be used as the multi-cloud provisioner as part of a more complex processing pipeline. 

This is exactly what CELAR does. It first automatically creates native images from high-level recipes or blueprints and deployment definitions. It then deploys applications according to these definitions and monitors their behaviour.

CELAR IaaS partners Flexiant and Okeanos have developed connectors for SlipStream that are now available. With over a dozen connectors, this makes SlipStream a truly multi-cloud PaaS and sets it apart in the market. 
