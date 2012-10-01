---
layout: article
title: SlipStream
class: slipstream
category: products
permalink: /products/slipstream.html
image: /img/design/slipstream_category.png
---

Automated provisioning and creation of cloud resources. SlipStream™ provides
a simpler access to clouds, yet letting users do much more. E.g. automated,
on-demand, creation of multi-machine runtime environments. Version control
the creation of custom machine images based on certified base images.
SlipStream™ can also be used as your software engineering PaaS solution,
as product and service. 

SlipStream will soon be released under an open source license. This means that
all SixSq cloud solutions will be available under a coherent open source license.

Our customers use SlipStream™ for:

* Provision pre-certified production systems, as part of an overall vertical
  solution
* Cluster provisioning in the cloud - e.g. pre-configured clusters of user
  defined sizes
* Version control the creation of reference images, on which to base
  virtual machine deployments
* Engineering Platform as a Service to speed-up project inception with
  provisioning of development tools (e.g. Jenkins/Hudson, Yum repository,
  Maven Nexus)
* Single access to federated cloud, where users can switch between clouds
  yielding identical results on each

We are constantly amazed by new ways our customers come-up with
using SlipStream™. If this is your case, please share them with us. 

SlipStream™ currently supports [Amazon EC2](http://aws.amazon.com) and
[StratusLab](http://stratuslab.eu). We are actively adding several more,
which should be announced soon. If you would like another cloud, or your
cloud to be supported, please drop us a line.

Easy access to the cloud
=========================================

SlipStream™ provides a simple interface (web and command-line client) to
interact with cloud environments. Details we are hiding include
contextualization, machine image creation and multi-machine deployment.
As we add more clouds supported by SlipStream™, this will also mean that
you will be able to more easily switch between clouds, therefor reducing
vendor lock-in. 

DevOps and SlipStream™
===========

SlipStream™ in a nutshell: Automated, on-demand, creation of multi-machine
runtime environments. In other words, a DevOps platform that provides 
a software engineering PaaS solution, as a product for you to install
on a local cloud or as a service on our hosted services.

With SlipStream™, once your deployment is automated, you can assess from any
point in your
software development chain the impact of any software or configuration change
on your ability to deploy into production. As an analogy, while junit provides
a framework for test automation at the class level, SlipStream™ does the same
but at the system level, including parameterised and multi-node deployment
scenarios. Further, SlipStream™ allows you to automate off-nominal scenarios,
such as data centre power failures or service unavailability, to verify that
your system is able to recover and maintain the expected quality of service
your customers expect from your software.

SlipStream™ is a simple to use, yet powerful, application built on top of
clouds that you do not have to worry about or maintain your own infrastructure.
Evaluation of SlipStream™ takes a few minutes, using our hosted secure on-line
service (SaaS), tutorials and documentation.

SlipStream™ v1.0 supports StratusLab, an open source IaaS distribution
and reference cloud as well as the well known Amazon EC2 cloud.

The advantage of SlipStream™ running on top of StratusLab is that you can
deploy SlipStream™ on your own infrastructure, if running on a commercial
public cloud like EC2 is not working for you. We will also soon be able to
manage different cloud back-ends from the same SlipStream™ installation giving
you even more freedom.

The initial idea
======================================

How stressful are your production releases? How much confidence do you have in
each new release you push to production? These are some of the problems that
motivated us in building SlipStream™. With SlipStream™ we can build
on-the-fly runtime or test environments, close to production deployments,
which allow us to assert that our good ideas and bug fixes can be deployed
into production to deliver value to ou users. SlipStream™ works on a
variety of IaaS clouds, so that we don't have to learn the detail of each
cloud every time we need to deploy our systems there. This also allows
us to share knowledge we have amassed in integrating and test systems
over the years in the form of patterns, machine image creation recipes
and multi-machine deployment, configuration and orchestration.

We think SlipStream™ fills this gap. If you see a missing feature, please
let us know.  We'll be more than happy to explore adding it to the system.

For the techies... How does it work?
======================================

SlipStream™ provides two main features:

1. Image creation factory
2. Deployment orchestration and coordination

The image creation factory allows users to create new images automatically
by applying a high-level recipe (e.g. scripts, packages) on a base image.
The result is a new machine image, built from version controlled elements,
which is then simple to configure manage, reproduce, update and maintain.

The deployment feature allows several virtual machines to be deployed
together, where SlipStream™ takes care of orchestrating their instantiation
and coordinates exchange of configuration information. The tutorial we
have prepared, which is available under the documentation link from the
main page of SlipStream™, shows how to build a simple client/server deployment
where a client contacts a web server to retrieve a simple document. The
example shows that the client needs to be given a hostname and port of the
web server it needs to contact, and only do so when it is ready.  For this
SlipStream™ takes advantage of cloud contextualisation, where it executes
a simple script at the end of the boot sequence. This script executes the
user defined logic, including synchronisation logic with a simple messaging
feature. The following diagram shows how the *Orchestrator* (a special
VM responsible for the execution of the deployment) instantiates two more
VMs (*Test Client* and *Apache* server). Three messages are then exchanged
between the VMs:

* IP address of the web server
* Port on which the web server listens for connections
* A ready state, telling the client that the web server is configured
and ready to accept connections

![Overview](/img/content/slipstream-deployment-overview.png "SlipStream Simple Deployment Overview")

In order to use these messages, scripts are defined by the user
in SlipStream™. For more details, please refer
to the online tutorial and reference manual.

One To Rule Them All :-P
===========

SlipStream™ can be configured to talk to several different cloud instances.
This means that you can create image recipes and deployments that will
yield identical results on different clouds. This is useful when dealing
with different clouds running in different locations, or when using
different clouds for the different phases of a development life-cycle.
The following diagram shows how different users can take advantage
of different cloud services, while maintaining their investment in terms
of image creation recipes and deployment models.

![Overview Clouds](/img/content/slipstream-cloud-overview.png "SlipStream Deployment Over Different Clouds")

The figure above also shows how different user profiles can interact with
SlipStream™. Here an advanced user will be creating new deployments and
images by creating these models in SlipStream™ and interacting directly
with the VMs to debug and test the deployments and images. Once in place,
standard users can then self-provision VMs and parameterised
pre-configures systems, in the click of a button.

For more details, please read the reference documentation and the tutorial
on the documentation link in one of our SlipStream™ hosted services.

Try Me
======

Give SlipStream™ a try on one of our hosted services. You now have the
choice of cloud back-ends:

* [SlipStream™ on Amazon EC2](https://slipstream.sixsq.com)
* [SlipStream™ on StratusLab](https://slipstream.stratuslab.eu)

To use the [StratusLab](http://stratuslab.eu) hosted version, simply request a
StratusLab evaluation account by visiting the 
[StratusLab registration page](https://register.stratuslab.eu:8445).
Then register with [SlipStream™](https://slipstream.stratuslab.eu) and follow the
[tutorial](https://slipstream.stratuslab.org/html/tutorial.html). StratusLab
usage is free for evaluation (commercial or not) and free for non-commercial
applications.

To use the [Amazon EC2](http://aws.amazon.com/) hosted version, simply create an
account on [SlipStream™](https://slipstream.sixsq.com), configure it with your
AWS credentials, and you're good to go. We suggest you start with a look at
the [tutorial](https://slipstream.sixsq.com/html/tutorial.html). During the
beta program, this service is free of any extra charges, so take advantage of
this unique opportunity.

FAQ
===

**Q1: I don't know cloud computing, will I be able to use SlipStream?**

A1: Sure. We've designed SlipStream not to expose cloud-isms in the
interface. Cloud computing offers many rich features that are very interesting
when deploying runtime systems, but the defaults we've put in place will hide
most of these details so that you can get going quickly without needing a
steep learning curve.

**Q2: I know cloud computing, will I be able to do more with SlipStream?**

A2: Absolutely. SlipStream doesn't yet expose all the richness of the
underlying cloud engines it can be configured to work with. However, it allows
you to automate routine operations, such as machine and disk image creation,
and multi-machine / complex deployments, with a version control system keeping
track of your changes. We are leveraging more and more cloud features at the
level of SlipStream, such that you leverage these features in your
deployments.

**Q3: What's the big deal with automating deployment? I've got a few scripts
that do the trick nicely.**

A3: Great. But chances are that you're the only one using these scripts, or
others find it difficult to use them. Further, as your software, its
configuration and dependencies change and evolve over time, you have to adapt
and change these scripts, in a controlled manner and version control them.
Furthermore, you might end-up with mixed logic between the steps required to
install, configure and start your services and components, from the logic
required to bring up your services in the right order. SlipStream provides a
clear and clean separation of concerns between the installation and
configuration of individual services, from the synchronisation logic between
services running inside machines. Finally, you should be able to reuse a lot
of your current scripts in SlipStream and since SlipStream has a web
interface, others in your team should be able to leverage your efforts by
creating private deployments at the click of a button.

**Q4: Can I reuse the same deployment to test different aspects of my system
(e.g. functional tests, performance)?**

A4: Yes. Each 'node' in a deployment can be instantiated any number of times
per deployment. This mean that, for example, you could have a client test that
could perform functional tests on its own on a regular basis, while from time
to time, you might want to perform the same test with say 100 or 1000 clients
running in parallel. You could also control the number of parallel
threads/processes your client test uses to contact the server and record
access time.

**Q5: Can I reuse existing virtual machines in SlipStream?**

A5: Yes. Depending on the cloud back-end you are using, you can create 'base
images' that point to existing virtual machines. See the reference manual for
further details.

