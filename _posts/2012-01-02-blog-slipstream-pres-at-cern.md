---
layout: article
title: A short history of SlipStream (presentation at CERN)
category: blog
image: img/design/slipstream_category.png
author: Marc-Elian Bégin
---

On February 1st, I gave a talk at CERN on [SlipStream](/products/slipstream.html).  It was an opportunity to go back to some of the original thoughts Cal Loomis and I had, since we met at CERN through the EGEE project, which eventually gave birth to SlipStream.  It's also while at CERN that I discover the cloud, in 2007, where it became obvious that this technology would be a big deal and had much more relevance than the grid as it was then proposed.  The [position paper](https://edms.cern.ch/file/925013/3/EGEE-Grid-Cloud.pdf) I wrote following a comparative study between the EGEE Grid (as used to compute LHC data for example) and the Amazon Web Services (EC2 and S3 back then).

I identified the problem SlipStream attempts to solve at the end of the 90s, while working on distributed systems for ESA/ESTEC, such as GSSF.  The problem is how do I do at the system level to continuously assert that I can release my software, such that it can be deployed and configured (multi-machines... otherwise the problem is much simpler) to deliver the intended business value.  And since life is short and we only have one, I want to be notified not long after each commit/push if I broke our ability to deliver.

In the summer of 2007, at CERN, working on the ETICS project, I wrote a prototype and demonstrated it with Pedro Andrade. The idea was to use the ETICS automation engine (leveraging the Condor Scheduler) to demonstrate how we can automatically deploy, configure and start a bunch of services, across a set of machines.  All this in an unattended way, after which we could trigger a testsuite able the assert the correct behavior of the system.  We used for that, since Pedro was the domain matter expert, D4Science middleware, built on top of gLite, the EGEE grid middleware.  And guess what?  It worked.  We could do in a few minutes, and repetitively, what used to take hours and days, in a hard to reproduce way (since many steps were manual).

Condor, as a batch scheduler, with its queues and running on bare metal was not ideal for this, since it put many constraints on the runtime environment, operating system, etc.  This is were the cloud, à la EC2, would fill the gap nicely, since starting from a clean and clear starting point (a pristine virtual machine) would make tons of sense.  Further, it would give much more freedom to the users, since they could define their runtime environment totally independently from the runtime environment system administrators of a site had chosen. 

The rest is history :-)

We released the very first alpha version of SlipStream in 2009. Last summer, we released the beta version.  And earlier this year, we released v1.0.  SlipStream is now available for Amazon EC2, and StratusLab.  We will soon release it for other clouds.  Many new and exciting features are in the works.
 

