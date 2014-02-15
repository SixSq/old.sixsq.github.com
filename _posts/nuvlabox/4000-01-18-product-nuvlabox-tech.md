---
layout: article
title: NuvlaBox
class: nuvlabox
category: NuvlaBox
permalink: /products/nuvlabox-tech.html
overview: /products/nuvlabox.html
features: /products/nuvlabox-features.html
business: /products/nuvlabox-business.html
techspecs: /products/nuvlabox-tech.html
pricing: /products/nuvlabox-pricing.html
sub: techspecs
---

In more detail, NuvlaBox<sup>®</sup> provides the following features: 

Using the NuvlaBox
====

NuvlaBox can be used in two main modes:

* **Standalone mode**
* **Remote controlled mode**

From a user point-of-view, the process is very similar for these two modes. Let's look at what a user needs to do to get going. 

**Standalone mode**

First, we'll consider the NuvlaBox in a standalone mode. This means that the box is not connected to a network that has access to the external world.

<p align="center">
<img src="/img/content/nuvlabox/nuvlabox-local.png" alt="NuvlaBox standalone" width="700" />
</p>

1. **Power-up the box**: To work in standalone mode, the NuvlaBox only needs power. Once powered-up, the box will create its own local Wi-Fi network, which can be used by any device (e.g. laptop, smart phone, tablet, pc). By default the Wi-Fi network is open. The ssid starts with *nuvlabox* so that it's simple to find. Once the device has joined the Wi-Fi, the user can connect to the box on a default url. From this landing page, the user can access the local App Stores, powered by SlipStream.
2. **Select App**: The user can then choose to deploy virtual servers (or machines) into the box. SlipStream offers a range of standard operating systems (e.g. Linux, Windows) to deploy. But the beauty of the system is in its ability to directly deploy and configure complete applications in the box.  From the catalogue of apps, the user only needs a single click to provision the right application (or only the operating system) in his/her NuvlaBox .
3. **Deploy**: This step is automatic. Once the user has selected an app to deploy, SlipStream submits the requests to the cloud layer in the box (powered by StratusLab). This will allocate a virtual machine with the right resource profile, including the base operating system, and boot it. Once the machine has booted, SlipStream takes over and completes the installation of the application, including configuration. From this point on, the virtual machine is up and the application fully ready.
4. **Enjoy**: The user can now enjoy the application :-)

NuvlaBox communicates over HTTPS, an encrypted protocol, making it impossible to intercept the communication, even over a Wi-Fi network.

In standalone mode, only locally cached operating system and applications can be deployed.  However, images can be created and cached locally while connected to the network, such that they will be available in standalone from that point onwards.

Users can create their own images and recipes (aka blueprints) and SixSq also offers a *Recipe Creation Service* to help users create custom images.

**Remote controlled mode**

A second more flexible mode is when the NuvlaBox is connected to a network with access to the wide area network. In this case, the user can take advantage of our hosted SlipStream service, which can be used as a channel for a wide range of applications and offerings. The user must have created an account with SixSq Enterprise Open App Store.

<p align="center">
    <img src="/img/content/nuvlabox/nuvlabox-remote.png" alt="NuvlaBox remotely connected" width="700" />
</p>

1. **Power-up the box**: See point 1 above.
2. **Connect**: From the NuvlaBox configuration panel, authorise the box to create a secure connection to SixSq's Enterprise Open App Store. With this connection established, the NuvlaBox will appear in the list of available clouds to deploy to.
3. **Select App**: As for the standalone mode, the user can select from a list of available applications and operating systems available from the store. The advantage of the Enterprise Open App Store is that it is not limited in terms of native images and recipes. 
4. **Deploy App**: If for example a user selects an application that requires a new native image, the first time the app is deployed to the NuvlaBox, the machine image will be downloaded and stored in the NuvlaBox. This means that if the same image is required later, it will already be cached and should start immediately.
5. **Enjoy**: The user can now enjoy the application :-)


NuvlaBox Services
====

We are working on a number of exciting new NuvlaBox services. Here are the ones we will soon release:

* **Maintenance and Support**: keep your NuvlaBox up-to-date with the latest software version.

* **Backup Service**: keep your NuvlaBox and its applications backed up. You choose what gets backed up and we ensure it is kept safe, in a location you choose and control.

* **Recipe Creation Service**: your favourite application is not in the SlipStream Enterprise Open App Store? With this service, we will create it and even involve the application authors so that you get more for your money.

NuvlaBox Technical Specification
====

NuvlaBox is delivered in a fanless PC. But NuvlaBox is not just about hardware, it's the software it runs that sets makes the difference.

**Software Specification**

* **Operating System**: CentOS 6.5
* **Cloud layer - Infrastructure as a Service (IaaS)**: [StratusLab](/products/stratuslab.html)
* **Local App Store - Platform as a Service (PaaS)**: [SlipStream](/products/slipstream.html)

No other cloud solution provides this level of functionality and integration. 

**Hardware Specification**

* i5 Intel processor
* 16 GB RAM
* 240 GB SSD storage
* 120W external power supply
* Wifi card
* Plenty of USB ports
* HDMI interface
* RJ-45 network adapter

Unlike many fanless PC currently produced, NuvlaBox delivers all the power the CPUs need to take full advantage of the system's virtualisation capabilities.


**Cached Machine Images**

NuvlaBox comes with pre-loaded operating system images, giving you solid foundations for building custom recipes (aka blueprints) for automating application deployment:

* CentOS 6.5
* Ubuntu 13.04
* Windows Server 2012 (option)


Want to Know More?
====

Interested and want to know more? We'd be pleased to give you a demo or provide you with further information. Request a member of the SixSq team to [contact you](mailto:support@sixsq.com).
