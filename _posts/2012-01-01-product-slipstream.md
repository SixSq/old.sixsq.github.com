---
layout: article
title: SlipStream
class: slipstream
category: products
permalink: products/slipstream.html
image: /img/design/slipstream_category.png
---

Automated, on-demand, creation of multi-machine runtime environments. In other
words, your software engineering PaaS solution, as product and service.

Your Software Engineering on Cloud (PaaS)
=========================================

SlipStream™ in a nutshell: Automated, on-demand, creation of multi-machine
runtime environments. In other words, your software engineering PaaS solution,
as product and service.

With SlipStream™, from SixSq, you can now assess from any point in your
software development chain the impact of any software or configuration change
on your ability to deploy into production. As an analogy, while junit provides
a framework for test automation at the class level, SlipStream™ does the same
but at the system level, including multi-node deployment scenarios. Further,
SlipStream™ allows you to automate off-nominal scenarios, such as data centre
power failures or service unavailability, to verify that your system is able
to recover and maintain the expected quality of service your customers expect
from your software.

SlipStream™ is a simple to use, yet powerful, application available to deliver
a service in the form of a secured managed infrastructure and environment such
that you do not have to worry about or maintain your own infrastructure.
Evaluation of SlipStream™ takes a few minutes, using our public secure on-line
service (SaaS), tutorials and documentation.

SlipStream™ v1.0 beta supports StratusLab, an open source IaaS distribution
and reference cloud. We are currently adding support for Amazon EC2.

The advantage of SlipStream™ running on top of StratusLab is that you can
deploy SlipStream™ on your own infrastructure, if running on a commercial
public cloud like EC2 is not working for you. We will also soon be able to
manage different cloud back-ends from the same SlipStream™ installation giving
you even more freedom.

The problem we are attempting to solve
======================================

How stressful are your production releases? How much confidence do you have in
each new release you push to production? These are some of the problems that
motivated us in building SlipStream™. With SlipStream™ you can build
on-the-fly runtime or test environments, close to production deployments,
which allow you to assert that your good ideas and bug fixes can be deployed
into production to deliver value to your users. SlipStream™ can work on a
variety of IaaS clouds. We also share some of the knowledge we have amassed in
integrating and test systems over the years in the form of patterns.

Try Me
======

Give SlipStream™ SaaS a try. You now have the choice of cloud back-ends:

* [SlipStream™ on Amazon EC2](http://slipstream.sixsq.com)
* [SlipStream™ on StratusLab](http://slipstream.stratuslab.eu)

To use the [StratusLab](http://stratuslab.eu) SaaS version, simply request a
StratusLab evaluation account
([support@stratuslab.eu](mailto:support@stratuslab.eu) or
[support@sixsq.com](mailto:support@sixsq.com)), register with
[SlipStream™](http://slipstream.stratuslab.eu) and follow the
[tutorial](http://slipstream.stratuslab.org/html/tutorial.html). StratusLab
usage is free for evaluation (commercial or not) and free for non-commercial
applications.

To use the [Amazon EC2](http://aws.amazon.com/) SaaS version, simply create an
account on [SlipStream™](http://slipstream.sixsq.com), configure it with your
AWS credentials, and you're good to go. We suggest you start with a look at
the [tutorial](http://slipstream.sixsq.com/html/tutorial.html). During the
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

