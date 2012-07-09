---
layout: article
title: ESA SCOS-2000 deployment automation with SlipStream in the Cloud
category: blog
image: /img/design/slipstream_category.png
author: Konstantin Skaburskas
comments: true
---

[SCOS 2000](http://en.wikipedia.org/wiki/SCOS_2000) (S2K - ESA Operations Centre Ground Control System Software) is a complex software stack providing ESA's satellite operators the ability to control and monitor the entire command and control chain. It consists of many components comprising cutting-edge software as well as legacy modules. A number (over five) commercial partners actively develop and maintain the S2K system on behalf of ESA.

![MICONYS system](/img/content/MICONYS_600.png "MICONYS system")

SixSq was approached by one of ESA's partners asking for help in automating the manual and laborious deployment and testing of S2K components.

S2K runs on SLES11 and distributed as a set of tarballs. In some cases the software components delivery between subcontractors and ESOC is even done on CDs.

In such case it's difficult to talk about processes of continuous integration and delivery of the full software stack. From the bright side, for us it was great to know that all the participating parties acknowledge the shortcomings and were enthusiastic in changing the approach.

[SlipStream](products/slipstream.html) with its abilities to

- build new machine images
- provision compute resources on Clouds using public and the custom built images
- orchestrate multi-machine deployments
- run tests, collect results and deliver them for post-processing

is a perfect match to tackle the issues by providing a framework (running as PaaS) for complex multitiered software deployments enabling automation of laborious work via repeatability of complex deployments on dynamically provisioned resources. Recently developed Jenkins/Hudson CI plugin for SlipStream allows even tighter integration into continuous build, deployment and testing processes.

Cloud
------

For evaluation purposes, the decision was made to use the site's local resources and deploy [StratusLab](http://stratuslab.github.com/) as a private Cloud. A full deployment of StratusLab was done, including a local Marketplace service. For VMs, public IP addresses were used and we were running a local DHCP server provided with the StratusLab installation. SlipStream was also locally installed on the site.

Hardware
------

The test environment consisted of two low range servers: 4 cores, 8 GB RAM with plenty of disk space. These resources were just enough to be able to deploy S2K in three-nodes deployment scenario, which consists of the following S2K servers 
* CLIENT - desktop server used by ESOC operators to launch client applications, which in turn connects to PRIME
* PRIME  - server providing most of the business logic for clients and holding databases
* BACKUP - PRIME's backup for failover


S2K three nodes deployment in SlipStream
------

The deployment order of the S2K PRIME, BACKUP and CLIENT nodes is the following: CLIENT nodes should wait until the PRIME is up and ready to accept connections, and only then connect to it; the PRIME and BACKUP can start concurrently since this concurrency is handled by S2K, where the BACKUP server will wait until the PRIME is up.

![S2K Deployment Scenario](/img/content/DeplS2K_600.png "S2K Deployment Scenario")

For each of the nodes a respective image module with the required deployment scripts and runtime parameters was created in SlipStream. After this, the nodes were combined into a deployment resolving dependencies on runtime parameters between the participating nodes.

Below is a collection of screenshots of SlipStream during the S2K deployment: the deployment definition itself, running phase, and the set of collected reports per node.

![S2K Deployment with SlipStream](/img/content/SS_S2K_depl_600.png "S2K Deployment with SlipStream")

MMI testing
------

The S2K components we had to deal with are Linux desktop GUI applications requiring KDE. All the applications have to be started from within S2K application launcher running in the same X server session. To be able to manipulate the GUI applications in unattended manner [LDTP](http://ldtp.freedesktop.org/) was used. To be able to launch X11 (with LDTP server running inside) on headless machines a handy approach for X11 Automated GUI Testing in Hudson scripted [here](https://code.launchpad.net/hudson-x11-guitest) was used.

Finally, for each of the servers, we were able to create Python script utilizing LDTP framework that was emulating a user working with GUI: launching required applications, filling out fields in edit boxes, confirming selections in dialogs, clicking here-and-there etc. All the GUI apps and their elements were conveniently addressed by names.

Results
------

By utilizing SlipStream alongside with automated GUI testing we were able to greatly decrease the software deployment and testing times. This decrease in time is from days and weeks to minutes.

With availability of the S2K components deployments, and possibility to retrieve and post-process the test results the whole QA turns into a fully automated process.

After the demonstration of the capabilities of SlipStream (provisioning VMs on StratusLab) and the implemented GUI testing method the overall approach is seen and acknowledged as a game changer by all the partners.

Retrospective
------

The VMs provisioning, automated S2K deployment with basic MMI testing was taking less than 25 min. On the hardware with very modest specifications we were able to automatically provision the S2K PRIME, BACKUP and CLIENT in about 7 minutes. However, it was clear that the VMs instantiation and the S2K deployment was taking a significant amount of time with the VM startup taking about 30% of the overall run time.

The deployment times is the area where improvements are possible not only by utilizing better hardware, but at the same time identifying bottlenecks in StratusLab cloud distribution and introducing respective improvements.

StratusLab and SlipStream are constantly evolving. With the new Persistent Disk server caching capabilities the VMs startup time would be greatly reduced.

At the moment we are upgrading the system to the latest StratusLab and SlipStream releases to leverage the recent improvement and features. For StratusLab the relevant new features would be

* StratusLab Persistent disk service that enables:

  * very fast VMs instantiation by using snapshots of machine images and flexible extra disk images manipulation (hot-plug/unplug)

  * policy enforcement on the incoming images to ensure that images have not being tampered with

  * upload/download machine and disk images in gzipped format to/from the Persistent disk service turing the service into an Appliance Repository

* integrated latest OpenNebula 3.2 with many improvements and featuring SunStone administrator and user interfaces
