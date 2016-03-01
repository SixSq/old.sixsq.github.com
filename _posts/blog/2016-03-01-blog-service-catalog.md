---
layout: article
title: Towards Automated Cloud Application Placement
category: blog
image: /img/design/slipstream_category.png
author: Charles Loomis
comments: true
---

Since its inception,
[SlipStream](http://sixsq.com/products/slipstream/) has supported
multi-cloud deployments of applications. SlipStream users can easily
choose which cloud to use from a drop-down list and can even split the
application deployment between clouds to take advantage of geographic
redundancy.

Intelligent choices, however, require reliable facts about the cloud
services.  SlipStream's "Service Catalog" provides information about a
cloud service provider's geographic location, capacity, and pricing.
SlipStream users can browse the catalog to determine the best clouds
for their applications and then choose them when deploying an
application.

The criteria used to choose the clouds for an application usually do
not change (much) for a given application.  These criteria could be
bundled into an application deployment "policy" that queries the
Service Catalog, returning a list of acceptable clouds.  This improves
the manual selection of clouds by eliminating unacceptable clouds.  If
the policy also ranks the acceptable clouds, then SlipStream can
select the top result, providing **fully automatic, policy-driven
application placement**.

This automated application placement is what we want SlipStream to
provide.  To achieve this, we're changing the Service Catalog
implementation through our involvement in the European Horizon 2020
project [CYCLONE](http://www.cyclone-project.eu). In particular, we
will:

 * Create "Attribute" and "ServiceInfo" resources.  The Attribute
   resource associates a Uniform Resource Identifier (URI) with a
   localized, human-readable description.  The ServiceInfo resources
   provide values for the attributes concerning a particular cloud
   service provider.  Together they provide a database of facts for
   the cloud providers.

 * Extend the application model to allow "policies" to be attached to
   application components and application themselves. These policies
   are essentially queries over the ServiceInfo resources that select
   acceptable clouds and then orders them from best to worst.

 * Augment the deployment process to evaluate the policies before the
   actual deployment.  SlipStream can then present only the acceptable
   clouds in the deployment dialog or automatically select the best
   cloud for each component.

The proposed implementation intentionally does not prescribe a schema
for the Attributes and ServiceInfo resources.  This allows the cloud
descriptions to evolve with time, incorporating new attributes when
necessary.

Initially, the defined attributes will cover the geographic location,
capacity, and pricing information that is currently available in the
[Helix Nebula Marketplace (HNX)](http://hnx.helix-nebula.eu), based on
SlipStream.  The attributes will be extended to include security
information, performance benchmarks, and perhaps other information.

In the latest stable release (v2.23.1), the Attribute and ServiceInfo
resource have been implemented.  We are currently evaluating several
backing databases to see which one provides acceptable query
performance and the richest application placement policies.  The best
candidate currently looks to be
[Elasticsearch](https://www.elastic.co/products/elasticsearch). We're
aiming to have the infrastructure in place for automated placement by
the end of the summer.
