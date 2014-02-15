---
layout: article
title: Cloud Connector Development and Transition of SlipStream Run through State Machine
category: blog
image: /img/design/slipstream_category.png
author: Konstantin Skaburskas
comments: true
---

To run deployments and images, or build new appliances internally SlipStream 
uses a state machine.  Logically the state machine of the Runs spans IaaS level provisioning 
(*Inactive*, *Initialize*), user application deployment (*Running*), collecting and 
delivering the framework and user specified logs from all the machines to the 
SlipStream server (*SendingReport*), and, if requested, a graceful termination 
of the machines (*Finalizing*, *Terminal*).

<a href="/img/content/current-state-machine.png" target="_blank">
  <img src="/img/content/current-state-machine.png" alt="State Machine" 
       width="650px" height="70px"/>
</a>

Should one worry about the state machine when developing a cloud connector for 
SlipStream? The short answer is _no_, you don't have to do anything about that :) 
Read on for a bit more details.

The transition of the Run through the states in the state machine is part of the 
deployment framework.  It is driven fully by the SlipStream server and is synchronised 
globally over the nodes in the deployment.  The nodes just report back that they've 
completed a certain state by setting their respective 'complete' attributes to 
'true'.  When all the nodes have set it to 'true', the transition to the next 
stage is imposed by the server.  And all this is done outside of the cloud connectors.

Note that the states of the SlipStream's state machine (*state* attribute) shouldn't be 
confused with the cloud VM states (*vmstate* attribute).  *state* attribute can 
be found in the global *ss* namespace of the Run and on each Node/Orchestrator. 
*vmstate* attribute is available only on the Nodes and Orchestrator.
