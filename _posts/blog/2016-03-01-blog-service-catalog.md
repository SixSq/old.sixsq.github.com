---
layout: article
title: Towards Automated Cloud Application Placement
category: blog
image: /img/design/slipstream_category.png
author: Charles Loomis
comments: true
---

By using portable cloud application definitions, you can choose the
best cloud service provider every time you deploy your application
with [SlipStream](http://sixsq.com/products/slipstream/).  To make
intelligent choices, however, you need reliable and timely information
about each provider.

The **Service Catalog**, which contains this information, is a
standard feature of the SlipStream Enterprise Edition that can be
activated for on-premise SlipStream installations.  For the SlipStream
services operated by SixSq, the Service Catalog is curently enabled on the
[Helix Nebula Marketplace (HNX)](http://hnx.helix-nebula.eu). 
[Nuvla](https://nuv.la) should follow soon.  We are currently refining and expanding
the Service Catalog to provide **fully automatic, policy-driven
application placement**.  The full implementation is planned for the
end of the summer, but users of HNX will see incremental improvements
along the way.

To achieve this, we're changing the Service Catalog implementation
through our involvement in [CYCLONE](http://www.cyclone-project.eu), a
European project funded by the
[H2020](https://ec.europa.eu/programmes/horizon2020/) program. In
particular, we will:

 * **Create "Attribute" and "ServiceInfo" resources.** The Attribute
   resource associates a Uniform Resource Identifier (URI) with a
   localized, human-readable description.  The ServiceInfo resources
   provide values for the attributes concerning a particular cloud
   service provider.  Together they provide a "key-value" database of
   facts about the cloud providers.

 * **Add deployment "policies" to the application model.** These
   policies, essentially queries over the ServiceInfo resources,
   select acceptable clouds and order the results from best to worst.

 * **Use the policies to guide the deployment process.** By applying
   the policies, SlipStream can then present the reduced list of
   acceptable clouds in the deployment dialog or select the best cloud
   for each component automatically.

The proposed implementation intentionally does not prescribe a schema
for the Attribute and ServiceInfo resources.  This allows the cloud
descriptions to evolve with time and to adapt to the needs of
different communities.

For HNX and Nuvla, the defined attributes will initially
cover the current geographic, capacity, and pricing information.
These attributes will be extended to include security information like
those in the [CSA Security, Trust & Assurance Registry
(STAR)](https://cloudsecurityalliance.org/star/), performance
benchmarks like those in [CloudHarmony](https://cloudharmony.com), and
perhaps other service information.

In the latest [stable
release](http://ssdocs.sixsq.com/en/latest/release_notes/stable_releases.html)
(v2.23.2), the Attribute and ServiceInfo resources have been
implemented.  We are currently evaluating several backing databases to
see which one provides acceptable query performance and the richest
application placement policies.  The best candidate currently looks to
be [Elasticsearch](https://www.elastic.co/products/elasticsearch).
The ability to attach deployment policies to applications will follow
shortly after the database choice has been made.

If all goes as planned, you will be able to take advantage of fully
automatic, policy-driven application placement by summer's end!
