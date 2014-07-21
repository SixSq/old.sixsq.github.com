---
layout: article
title: Auto-Scale and Mutable Deployments
class: slipstream
category: usecases
user_profile: Enterprise
warning: this use case describes a future feature
---

Being able to automate complex deployment is important in order to reduce time to market, improve quality and security, as well as reducing costs.
However, a growing number of applications would benefit from being able to use a variable amount of resources. For example, web applications can
have a surprising variation in the level of load based on user activity. Database applications can be stressed when important consolidation activity takes place
or when rebalancing actions are required. Further, applications could also take advantage of *moving with their users* such that they can redeploy
themselves to be closer to the users, as the Earth rotates, for example.

SlipStream has already the ability to automate parameterised deployments. For example, users can deploy a WordPress template including user parameters
such as the WordPress name, the password of the administrator and which cloud to target. But these deployments are static once provisioned - i.e. once the
user has clicked the run button.

The SixSq team is currently working on the ability to support *mutable* deployments, a key feature that will open the door to full auto-scale capability.
This first step allows users to change the number of virtual machines used for a given layer (see [LAMP and complex application provisioning](/products/slipstream-usecases.html#LAMP-and-complex-application-provisioning) for details)
after the initial deployment. For example, the number of web nodes in a n-tier application can be increased or removed, at the click or a button,
a CLI call or a API call. In turn, SlipStream's automation logic will kick-in to ensure that each layer is being notified, such that for example,
the load balancer layer updates its list of web nodes to forward work to, or that the database cluster rebalances itself taking into account new
or old nodes.

Following from this mutable feature, monitoring and custom KPI definitions will complete the full auto-scale feature.

Pricing
----

Auto-scale is currently planned to be a basic feature of SlipStream. All [plans](/products/slipstream-pricing.html) will include it.
