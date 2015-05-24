---
layout: article_slipstream
title: SlipStream
title_gfx: /img/design/slipstream_logo.png
class: slipstream
category: SlipStream
permalink: /products/slipstream/slipstream-tech.html
image: /img/design/slipstream_category.png
sub: techspecs
---

Technical Specification
=================

SlipStream provides simple interfaces (web and command-line client) to interact with cloud environments. All clouds are not equal and several clouds have their own approach to VM lifecycle and configuration. SlipStream's connector architecture provides an abstraction layer giving the opportunity to each connector to leverage the advantages, and work around the inconveniences, of each cloud. The result is a consistent behaviour, across clouds. The following are examples of harmonisation SlipStream provides:

* **Multi-machine deployment**: specify at provisioning time the *number of instances* you want for each type of VM in your deployment model, *parameters* (e.g. package version, credentials, IPs of external systems), as well as the cloud service(s). You can even deploy different parts of your application on different cloud services and let SlipStream worry about provisioning, orchestrating and configuring your applications.

* **Machine image creation**: pick a base image, drop in your scripts (e.g. Bash, Python, Ruby, Chef, Puppet) and/or a list of packages in SlipStream and let it do the image creation heavy lifting for you. This version and automated process can be applied to all supported cloud services, yielding the same consistent results on each cloud.

* **Extra disk attachment**: keeping your base images small and tidy simplifies life but can be constraining. 
  SlipStream is able to automatically attach extra disks, such that you can dynamically increase the available disk size to 
  your virtual machine, at provisioning time. 

Our cloud connector architecture allows us to quickly develop and integrate with current and future IaaS cloud services. 

This means that you will be able to easily switch between clouds, therefore avoiding vendor lock-in. If we do not support your cloud, please get in touch, chances are we are already working on it.

REST API
===========

SlipStream exposes a RESTful API. This API allows users to build on top of the service, making vertical integration straightforward.  The [API is fully documented](http://slipstream.github.io/SlipStreamDocumentationAPI/), including request/response examples.  Advanced users have already integrated SlipStream as a [provisioning engine](/products/slipstream-usecases.html#LAMP-and-complex-application-provisioning), or an [AppStore](/products/slipstream-usecases.html#Enterprise-App-Store-/-Self-Service-IT), inside existing and new higher-level services. This resulted in a gain of time and effort and corresponding reduction in time-to-market. Further, this strategy also allows user organisations to maintain flexibility and freedom of choice regarding the underlying IaaS solution used, as well as supporting [hybrid scenarios](/products/slipstream-usecases.html#Hybrid-Cloud-Provisioning).

DevOps and SlipStream
===========

SlipStream in a nutshell: Automated, on-demand, creation of multi-machine runtime environments. In other words, a DevOps platform that provides a software engineering PaaS solution, as a product for you to install on a local cloud or as a hosted service.

With SlipStream, once your deployment is automated, you can assess, from any point in your software development chain, the impact of any software or configuration change on your ability to deploy into production. As an analogy, while JUnit provides a framework for test automation at the class level, SlipStream does the same at the system level, including parameterised and multi-node deployment scenarios. Furthermore, SlipStream allows you to automate off-nominal scenarios, such as data centre power failures or service unavailability, to verify that your system is able to recover and maintain the expected quality of service your customers expect from your software.

SlipStream is a simple to use, yet powerful, application built on top of public clouds or your own infrastructure. Evaluation of SlipStream takes a few minutes, using our hosted secure on-line service (SaaS), tutorials and documentation.


In more detail...
=================

SlipStream is a multi-cloud coordinated provisioning and image factory engine. In other words, it is an engineering Platform as a Service (PaaS) solution to support production deployment in the cloud, as well as development, testing, certification and deployment processes into Infrastructure as a Service (IaaS) cloud environments. 


The core of SlipStream, as well as several connectors, are released under the open source Apache 2.0 license.
Check it out on [GitHub](http://github.com/slipstream).

SlipStream provides two main features:

* Image creation factory

* Deployment orchestration and coordination

The image creation factory allows users to create new images automatically
by applying a high-level recipe (e.g. scripts, packages) on a base image.
The result is a new machine image, built from version controlled elements,
which is then simple to configure manage, reproduce, update and maintain.

The deployment feature allows several virtual machines to be deployed
together, where SlipStream takes care of orchestrating their instantiation
and coordinates exchange of configuration information. The tutorial we have
prepared, which is available under the documentation link from any 
SlipStream web page, shows how to build a simple client/server deployment where
a client contacts a web server to retrieve a simple document. The example
shows that the client needs hostname and port of the web
server it needs to contact, as well as an indication that the web server is
ready to accept connections. For this,
SlipStream takes advantage of cloud contextualisation (when available), 
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

<p align="center">
    <img src="/img/content/slipstream-deployment-overview.png" alt="SlipStream Simple Deployment Overview" />
</p>

In order to use these messages, scripts are defined by the user in
SlipStream. For more details, please refer to the online tutorial
and reference manual.


Cloud Agnostic
===========

SlipStream can be configured to talk to several different cloud
instances. This means that you can create image recipes and deployments
that will yield identical results on different clouds. This is useful
when dealing with different clouds running in different locations, or
when using different clouds for the different phases of a development
life-cycle. The following diagram shows how different users can take
advantage of different cloud services, while maintaining their investment
in terms of image creation recipes and deployment models.

<p align="center">
    <img src="/img/content/slipstream-cloud-overview.png" alt="SlipStream Deployment Over Different Clouds" />
</p>

The figure above also shows how different user profiles can interact
with SlipStream. Here an advanced user will be creating new deployments
and images by creating these models in SlipStream and interacting directly
with the VMs to debug and test the deployments and images. Once in place,
standard users can then self-provision VMs and parameterise pre-configured
systems, in the click of a button.

For more details, please read the [documentation](https://slipstream.sixsq.com/documentation)
available from our [SlipStream hosted service](https://slipstream.sixsq.com).
