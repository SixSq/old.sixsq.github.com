---
layout: article
title: Virtualisation and cloud
category: blog
image: /img/design/seethroughcloud_category.png
author: Louise Merifield
comments: true
---

**What is the difference between cloud and virtualisation?**

And what is virtualisation anyway? And does cloud have to be distributed, at least geographically? I'd like to share what I've found out.

The fact that [Babbage](http://en.wikipedia.org/wiki/Babbage) came up with the idea of the first programmable computer  way back in 1837 totally blows my mind. How did he do that? I guess he was the very first geek. And these IT geeks continue to amaze me. Some clever clogs came up with the idea that you can run [virtual machines](http://en.wikipedia.org/wiki/Virtual_machine) inside a computer, so a piece of software pretends it is a real server. In this way, you can have one physical box running many operating systems and applications at the same time. This brings many advantages, including energy savings, faster server installation (you don't have to fill out a form and wait for a physical box to be delivered) and higher availability and uptime. So from a cost standpoint virtualisation is a great move. You can do much more with much less, which is why, reportedly, more than 70% of companies run at least some of their workload on virtual machines.  This diagram gives an idea of the principal:

<IMAGE>

However (isn't there always one of those?), there is still a lot of work to do. You need an expert in virtualisation to deploy the operating systems and applications you want, so it is not a self-service system. The IT department has to find a physical server on which to start and stop, or *provision* in IT speak, the virtual machines, i.e. act as the *waiter*. Also, usage cannot be quickly scaled up and down, as the waiter has to bring in extra supplies or clear away what you don't need.

So where does **cloud** differ? Virtualisation is indeed the foundation for cloud, but it is just one component. With additional software layers, cloud provides things virtualisation doesn't, for example:

* self-service: users can provision new servers themselves using a software interface, leaving the waiter to do something more interesting and creative 
* rapid elasticity: when the IT department does not have to intervene to provision machines, usage can be scaled up and down more quickly, removing the middleman (or our waiter)
* automated management: the IT guys can meter the usage of each department and focus on issues such as security and reliability, instead of being... well a waiter
* pay-as-you-go service: departments can be internally charged on a monthly or hourly basis, ensuring a much more efficient usage of resources. If something is hard to get, even when you don't need it anymore, you tend to hold on to it... just in case. This strange logic disappears with a well managed cloud service.

All of this makes it sound like it is always better to opt for cloud over virtualisation. Is that the case? Well, cloud is much more complex than virtualisation and costs more to set up, although you do recoup these costs in the long run as the process is less labour intensive. Another issue is that if you put your computing resources in a public cloud, you don't have any control over the computing environment. 

So now I can see that in computing terms a cloud doesn't have to be located far away from you, it can be in the corner of your law practise, medical surgery, architect's office or school. 

So now I have to ask myself the question, what is the difference between a private/local cloud and a public cloud? Looks like I've got some more research to do for my next blog.
