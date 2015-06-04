---
layout: article
title: LAMP and complex application provisioning
class: slipstream
category: usecases
favourite: true
user_profile: Enterprise
warning: this use case is technical. Geeks only!
persona: Alice
context: SME, NGO and Enterprise
context_type: enterprise
---

The current cloud landscape is busy with solutions that allow users to manage virtual machine life cycles. While this is an important building block, it falls short in terms of delivering on the full cloud potential.
What most organisations want is the ability to reason in terms of application or even sets of interrelated applications working together to deliver certain functionality, or value. For example, a stateful web application, CRM system, WordPress or management application. Several of these application are built on a n-tier architecture, such as a LAMP stack.

In most cases, such deployment will require the involvement of several hosts, which in cloud terms translates to different virtual machines. Deploying such an application is complex and error prone, calling for an automated solution. Indeed, being able to automate the installation, configuration and start of the different components, clients and services would deliver significant value in the software development and operations pipeline. Furthermore, such deployment should be as representative as possible of (pre-)production conditions, to avoid rollout issues. This automation capability is key and enables several higher level use cases, such as the ability for:

1. **End-users** to provision applications in *1-click* from the [Enterprise App Store / Self-Service IT](/products/slipstream-usecases.html#Enterprise-App-Store-/-Self-Service-IT) capabilities of SlipStream.
2. **IT experts** to deploy applications on several clouds at once, taking advantage of [Hybrid Cloud Provisioning](http://localhost:4000/products/slipstream-usecases.html#Hybrid-Cloud-Provisioning) SlipStream feature. 
3. **DevOps engineers** to deploy more often to more easily test, break and stress their applications, knowing that they can easily reset the application if broken by a set of tests. This feature is detailed in the [DevOps](http://localhost:4000/products/slipstream-usecases.html#DevOps-platform) use case.

To illustrate the ability of SlipStream to manage complex deployments, we have created a demo LAMP model. This model includes the following layers:

- **Load balancer**: configured for round robin between the Apache2/PHP nodes.  We use the open source HAProxy solution for this layer.
- **Apache2/PHP**: cluster of state-less Apache2/PHP applications. For demonstration purposes, we have included in the PHP layer a simple application running on the default port 80. The PHP scripts running behind the scene are configured to connect to the MongoDB layer. The configuration also includes failover logic in case of database node failure, including switch over to the next healthy node.
- **MongoDB**: the database cluster configured by default with a majority replication scheme.

By default these layers run in the same cloud, but users can assign each layer to a different cloud. Further, the number of VMs assigned to each layer is parameterised, such that users can define the number of VMs forming, for example, the MongoDB database cluster or the Apache/PHP servers. Best of all, this is only an example. Any user can create its his/her own configuration, using the LAMP example as a starting point.

Another interesting feature included in this example is SlipStream’s ability to provision extra disks. In the case of the database layer, this means that users can define at provisioning time the size of data assigned to each cluster node.  The MongoDB cluster in the LAMP example can also be used in a stand-alone mode or used in other deployments, encouraging sharing and re-use.
