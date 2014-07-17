---
layout: article
title: Internet of Things and Sensor Aggregating
class: nuvlabox
category: usecases
user_profile: Any SME and Enterprise
---

More and more *intelligent* devices can be *connected*, contributing to the phenomenon known as Internet of Things. These applications bring both opportunities and challenges. The opportunity comes from being able to monitor more devices (e.g. machines, cameras, sensors of all sorts) and the ability to retrieve remotely interesting data. The challenge is in handling all this data, in a consistent and secure way.  For example, sensors play an important role in agriculture and forestry today, with the need to increase production and reduce costs, while keeping a close eye on environmental impact. The use of sensors helps to exploit all available resources appropriately and to apply hazardous products moderately. However, forwarding raw data from the sensors via broadband network is expensive and not always possible due to scarce bandwidth and resources. Also, when considering security implications, this approach is in most cases a non-viable.  A similar application is to aggregate security camera feeds, such that all the data remains on site, while allowing specific feeds to be transmitted off site if and when required. This ensures that bandwidth is used adequately, while addressing security concerns.

The NuvlaBox solves that problem when used as a sensor aggregator.  Indeed, if we connect the sensors to the box, either via WiFi or Ethernet, applications running in the box can act as an aggregator.  This aggregator can perform a number of things in the box itself:

1. Store raw data locally
2. Aggregate (e.g. reduce, post-process) the raw data into datasets that can be more readily used
3. Stream data (raw or aggregated) back home. This process can be setup such that it only takes place when external connectivity is available and detected
4. Allow remote control, when connected to the WAN, such that several locations can be monitored at once
5. etc...

The internal storage of the box can currently be increased to 1 TB. However, it comes with several USB ports, allowing for significant extensibility.


Pricing
----

The catalogue price of a NuvlaBox is [€1495](/products/nuvlabox-pricing.html). It contains all the required features for local operations, including the ability to create new deployment recipes/blueprints to augment the app store.

Each application to be deployed on the box will require a recipe/blueprint, which takes the form of a few scripts and configuration. SixSq will be happy to help you with this task, via our professional [*Recipe Creation Service*](/products/nuvlabox-pricing.html).

To remote control boxes, you will need a SlipStream instance. [SlipStream](/products/slipstream.html) is the software piece that contains the intelligence including the multi NuvlaBox dashboard. While SixSq runs SlipStream as a SaaS, you will most probably want to run your own version for this type of usage. Please refer to the [SlipStream pricing page](/products/slipstream-pricing.html) for details. Please note that you will need a connector instance per box. We support both permanent and subscription license schemes. Bulk pricing is also available on request.

If you need deployment recipes or blueprints to automate application deployment, SixSq will be happy to help you with this task, via our professional service.  Just [get in touch](mailto:info@sixsq.com).

By default, the NuvlaBox ships with 240 GB SSD. This can be increased to 1 TB. Please [get in touch](mailto:info@sixsq.com) for further information on the cost of this option.
