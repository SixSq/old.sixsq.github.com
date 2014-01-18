---
layout: article
title: SlipStream™
title_gfx: /img/design/slipstream_logo.png
class: slipstream
category: products
permalink: /products/slipstream.html
image: /img/design/slipstream_category.png
tryme: https://slipstream.sixsq.com
summary: 1-click application deployment automation in the cloud of your choice. An open source solution to build your own Enterprise Open App Store and DevOps process...
---

**SlipStream is an application deployment automation platform, built on the following key principals:**

* **Real multi-cloud**: SlipStream supports all mainstream cloud solutions and more. You're recipes and blueprints are truly independent of the target cloud solution or provider. You can also take advantage of this neutrality by deploying across several clouds concurrently.

* **No voodoo magic**: Everything is above board, with a simple yet rich set of functionality to create, share and use application deployments.

* **Freedom of choice**: SlipStream supports all mainstream IaaS cloud solutions, giving you the freedom to choose the right cloud solutions and providers to do the job

* **No modification to your application required**: SlipStream's simple script based automation means that you can deploy any apps without any changes required. We also support all standard configuration management solutions, such as Chef and Puppet.

* **Full multi-tenant support**: Users can control who sees what, with private, group and public sharing policies.

* **Built-in version control**: All key artefacts in the system are version controlled, ensuring nothing is ever lost.

**SlipStream offers clear and tangible business benefits:**

* **Fed up with spending time configuring and installing applications?** SlipStream™ allows you to automate deployments thereby saving time and money

* **Need to improve your time to market, while reducing operational costs?** Use SlipStream™ as a solid foundation for your DevOps process.

* **Having trouble getting your users to install and configure your software?** Use SlipStream™ as your Enterprise Open App Store™.

* **Want to remain independent from the cloud you deploy to?** SlipStream™ deployments are cloud agnostic and it supports all popular clouds.

The use of SlipStream™ is currently free of charge.  You only pay the cloud providers for the cloud resources you consume.

We have put a lot of effort in the documentation, including several tutorials, which will give you great insight into the capabilities of SlipStream™.

CREATE ACCOUNT

In more detail, SlipStream™ provides the following features: 

* **Multi-machine Provisioning System**: SlipStream™ allows users to define and execute deployments, based on high-level recipes, independently from the cloud on which the recipes will be applied.  Deployments include coordination and orchestration of virtual machines, including ordering and synchronisation of services. Figure 1 shows a screenshot of the SlipStream™ control dashboard of a multi-machine deployment.

  For example, users can deploy, in a single action, on-demand, entire mutli-tier software systems. With SlipStream™, this operation takes a few minutes, often compared to hours if not days using custom solutions. 

* **Multi-cloud Provisioning**: SlipStream™ supports multi-cloud deployments. This means users have the choice of a number of cloud service providers and technologies (public and/or private) when deploying virtual machines, from within the same SlipStream™ service. Furthermore, users can choose to deploy different parts of a deployment on different cloud services or regions, such that redundant and resilient behaviour is reached.  Figure 2 shows a screenshot of the SlipStream™ control dashboard of a multi-cloud deployment.  SlipStream™ supports different clouds using a connector design.  The available connectors are listed in Table 1.

  To illustrate, users can deploy applications (e.g. computing clusters, load balanced applications, multi-media processing pipelines) across several cloud providers, in order to improve data proximity & resilience, while reducing costs.

* **Support continuous integration processes with continuous deployment**: SlipStream™ encourages users to parameterise image creation and deployment recipes, such that key parameters (e.g. software version, package location, dependencies, inter-relationships) can be provided at runtime. This means that it is easy to integrate SlipStream™ with continuous integration servers to provide a full deployment chain. 
	
  For instance, users can provision complete server-side systems in a single action in order to test and certify a specific version of the system.

* **Independence from specific IaaS interfaces and hypervisors**: the SlipStream™ recipes are independent of specific IaaS interfaces, therefore avoiding vendor lock-in, allowing you to focus on configuration and deployment, instead of the specifics of each IaaS. 

  For example, users can seamlessly apply the same image construction recipes and multi-machine deployments to different cloud providers, yielding the same results every time.

* **Community sharing platform**: the SlipStream™ data model permits users to decide to share their image and deployment recipes with other users, thus contributing to a community effort, something dear to agile and DevOps principles.

Supported Clouds
========

SlipStream™ communicates to IaaS clouds services via a connector architecture. A growing number of connectors are available. The connectors talking to open source IaaS implementations are released under the same open source license as the SlipStream™ core, while connectors to proprietary solutions are closed source and available via a commercial license.

![Supported Clouds](/img/content/connectors.png "SlipStream™ Supported Clouds")


Easy access to the cloud
=========================

SlipStream™ provides simple interfaces (web and command-line client) to interact with cloud environments. All clouds are not equal and several clouds have their own approach to VM lifecycle and configuration. SlipStream™'s connector architecture provides an abstraction layer giving the opportunity to each connector to leverage the advantages, and work around the inconveniences, of each cloud. The result is a consistent behaviour, across clouds. The following are examples of harmonisation SlipStream™ provides:

* **Contextualization**: even for cloud solutions that do not support contextualisation, SlipStream™ goes the extra mile and
  hides this by pushing contextualisation into the VM, after locking any SSH username/password remote access.
* **Machine image creation**: pick a base image, drop in your scripts (e.g. Bash, Python, Ruby, Chef, Puppet) and/or a list of   
  packages in SlipStream™ and let it do the image creation heavy lifting for you. This version and automated process can be
  applied to all supported cloud services, yielding the same consistent results on these clouds.
* **Multi-machine deployment**: specify at provisioning time: the *number of instances* you want for each type of VM in your
  deployment model, *parameters* (e.g. package version, credentials, IPs of external systems), as well as the cloud service(s)
  (you can even deploy different parts of your application on different cloud services) and let SlipStream™
  worry about provisioning, orchestrating and configuring your applications.
* **Extra disk attachment**: keeping your base images small and tidy simplifies life but can be constraining. 
  SlipStream™ is able to automatically attach extra disks, such that you can dynamically increase the available disk size to 
  your virtual machine, at provisioning time. 

Our cloud connector architecture allows us to quickly develop and integrate with current and future IaaS cloud services. 
This means that you will be able to easily switch between clouds, therefore avoiding vendor lock-in. If we do not support your cloud, please get in touch, chances are that we might very well be able to add it to our short term roadmap.

DevOps and SlipStream™
===========

SlipStream™ in a nutshell: Automated, on-demand, creation of multi-machine runtime environments. In other words, a DevOps platform that provides a software engineering PaaS solution, as a product for you to install on a local cloud or as a hosted service.

With SlipStream™, once your deployment is automated, you can assess, from any point in your software development chain, the impact of any software or configuration change on your ability to deploy into production. As an analogy, while JUnit provides a framework for test automation at the class level, SlipStream™ does the same at the system level, including parameterised and multi-node deployment scenarios. Furthermore, SlipStream™ allows you to automate off-nominal scenarios, such as data centre power failures or service unavailability, to verify that your system is able to recover and maintain the expected quality of service your customers expect from your software.

SlipStream™ is a simple to use, yet powerful, application built on top of public clouds or your own infrastructure. Evaluation of SlipStream™ takes a few minutes, using our hosted secure on-line service (SaaS), tutorials and documentation.


TECH CORNER: In more detail
======================================

SlipStream™ is a multi-cloud coordinated provisioning and image factory engine. In other words, it is an engineering Platform as a Service (PaaS) solution to support production deployment in the cloud, as well as development, testing, certification and deployment processes into Infrastructure as a Service (IaaS) cloud environments. 


The core of SlipStream™, as well as several connectors, are released under the open source Apache 2.0 license.
Check it out on [GitHub](http://github.com/slipstream).

SlipStream™ provides two main features:

1. Image creation factory
2. Deployment orchestration and coordination

The image creation factory allows users to create new images automatically
by applying a high-level recipe (e.g. scripts, packages) on a base image.
The result is a new machine image, built from version controlled elements,
which is then simple to configure manage, reproduce, update and maintain.

The deployment feature allows several virtual machines to be deployed
together, where SlipStream™ takes care of orchestrating their instantiation
and coordinates exchange of configuration information. The tutorial we have
prepared, which is available under the documentation link from any 
SlipStream™ web page, shows how to build a simple client/server deployment where
a client contacts a web server to retrieve a simple document. The example
shows that the client needs hostname and port of the web
server it needs to contact, as well as an indication that the web server is
ready to accept connections. For this,
SlipStream™ takes advantage of cloud contextualisation (when available), 
where it executes
a script at the end of the boot sequence. This script executes the
user defined logic, including synchronisation using a simple messaging
feature. The following diagram shows how the *orchestrator* (a special VM
responsible for the execution of the deployment) instantiates two more
VMs (*Test Client* and *Apache* server). Three messages are then exchanged
between the VMs:

* IP address of the web server
* Port on which the web server listens for connections
* A ready state, telling the client that the web server is configured
  and ready to accept connections

![Overview](/img/content/slipstream-deployment-overview.png "SlipStream™ Simple Deployment Overview")

In order to use these messages, scripts are defined by the user in
SlipStream™. For more details, please refer to the online tutorial
and reference manual.


Cloud Agnostic
===========

SlipStream™ can be configured to talk to several different cloud
instances. This means that you can create image recipes and deployments
that will yield identical results on different clouds. This is useful
when dealing with different clouds running in different locations, or
when using different clouds for the different phases of a development
life-cycle. The following diagram shows how different users can take
advantage of different cloud services, while maintaining their investment
in terms of image creation recipes and deployment models.

![Overview Clouds](/img/content/slipstream-cloud-overview.png "SlipStream™ Deployment Over Different Clouds")

The figure above also shows how different user profiles can interact
with SlipStream™. Here an advanced user will be creating new deployments
and images by creating these models in SlipStream™ and interacting directly
with the VMs to debug and test the deployments and images. Once in place,
standard users can then self-provision VMs and parameterise pre-configured
systems, in the click of a button.

For more details, please read the [reference documentation](https://slipstream.sixsq.com/html/reference-manual.html)
and the [tutorial](https://slipstream.sixsq.com/html/tutorial.html), included with our [SlipStream™ hosted service](https://slipstream.sixsq.com).


Try SlipStream™ For Free
======

Give SlipStream™ a try on our [hosted service](https://slipstream.sixsq.com). The hosted service is currently free of charge.

Creating a SlipStream™ an account takes a few seconds. Once logged-in, you have a number of cloud services to choose from, so simply pick the one you fancy, or several, configure your account accordingly and you're good to go. We then suggest you start by taking a look at
the [tutorial](https://slipstream.sixsq.com/html/tutorial.html). 


Software Bundles and Products
====

SixSq delivers certified SlipStream™ bundles, containing software in the form of binary packages, documentation, starter kit and examples. The bundles can be created 'à la carte', including open sourced and proprietary connectors, as well as custom image and deployment recipes and scripts. The bundles also include, maintenance and support so that you stay up to date with our fast release cycles.

We also deliver SlipStream™ in a hardware turn key solution, called [NuvlaBox](/products/readypack.html). You can also rely on our [SlipStream™ hosted service](https://slipstream.sixsq.com), if you prefer the peace of mind of a SaaS delivery model. 
