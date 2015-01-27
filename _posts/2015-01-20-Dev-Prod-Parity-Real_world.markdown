---
layout: post
title:  "Failure to Launch"
date:   2015-01-20 11:00:00
img: /static/knick.jpg
categories: posts
tags:
- tech
- productivity
---

[Medicine](http://mentalfloss.com/article/58736/interview-dr-stanley-burns-knicks-medical-advisor) was very different in the early 1900’s. It was challenging to find cadavers, so Surgeons got all their practice on pigs before they ever touched a live human for surgery. This is where we are with development: we program on pigs and then deploy to humans. 

Some of the biggest failures on the web today happens when your team deploys broken code. Everyone does it, from the smallest startups to large enterprise software companies. Regardless of whether or not you have DevOps resources there are ways to avoid it, chief of which is to take caution when testing and setting up your development environments. At [Bowery](http://bowery.io/), we recognized this as a huge problem in engineering organizations and want to make it easier for you and your team to deploy what you see in development.

### It’s Cool, I’m Testing in Prod

Everyone who considers themselves a DevOps practitioner will encourage you to test in a clone of your production environment to achieve dev/prod parity. Keeping dev and prod equal is meant to prevent failure caused from the three gaps created while you write and ship code: (taken from the [Twelve Factor App](12factor.net/dev-prod-parity))  

* The time gap: A developer may work on code that takes days, weeks, or even months to go into production.
* The personnel gap: Developers write code, ops engineers deploy it.
* The tools gap: Developers may be using a stack like Nginx, SQLite, and OS X, while the production deploy uses Apache, MySQL, and Linux. 


The perfect development environment is a replica of your production environment, maintaining equality through the development process. It’s a challenge for most engineering organizations and this mismanagement of development and production environments have caused a few very public failures. 

### Dependency Failure at &yet

_TL;DR: Once developers pushed code from their individual machines, dependency changes/differences would crash other parts of the system._

[&yet](https://blog.andyet.com/2012/12/13/and-bang-deploy-process) is a small development company in Washington. They deployed broken code while they were testing the redesign of their deploy process, and it wasn’t pretty:

_People can accidentally push to the wrong branch, deploying their code unintentionally. Dependencies can change and fail to install in the fabric script. The fabric script could crash, and we would have no idea why. We had logs, of course, but the developers didn’t have access to them. All they knew was they pushed code and it wasn’t live. So we’d poke around in the logs, find the problem, fix it, and go about our business grumbling to ourselves._
_from the [&yet blog](https://blog.andyet.com/2012/12/13/and-bang-deploy-process)_

Independently managing dependencies on your local machine is time-consuming and hazardous, but most teams don’t notice until you end up in a disaster. Maintaining consistency between development, staging and production environments is key to minimizing the tools gap. 

### Scripting Failures at Dropbox

_TL;DR Dropbox went down because there was no way to test the upgrade scripts in a production environment to ensure the upgrade would work._

It’s fairly common to test standard upgrade scripts that will run across hundreds of machines, but most don’t test these scripts on their production environment. In 2014, [Dropbox](https://tech.dropbox.com/2014/01/outage-post-mortem/) had a major outage during scheduled maintenance because of a bug in one of their upgrade scripts: 

_On Friday at 5:30 PM PT, we had a planned maintenance scheduled to upgrade the OS on some of our machines. During this process, the upgrade script checks to make sure there is no active data on the machine before installing the new OS.
A subtle bug in the script caused the command to reinstall a small number of active machines. Unfortunately, some master-replica pairs were impacted which resulted in the site going down._
_from [Dropbox's Post Mortem](https://tech.dropbox.com/2014/01/outage-post-mortem/)_

For Dropbox there was no way for them to run the script to make sure it could execute a clean upgrade. It was likely tested on one person’s machine, but not in an environment that replicated their production servers. 

### Github’s DNS Issue

_TL;DR: A bug in Github’s Puppet Manifests caused issues with DNS Routing._

In January 2014, [Github](https://github.com/blog/1759-dns-outage-post-mortem) reported an outage to their DNS infrastructure. This caused “42 minutes of downtime of services along with an additional 1 hour and 35 minutes of downtime.” Not great for a service that is central to thousands of development organizations. 

_Github: We began to observe that certain DNS queries were timing out. We quickly investigated, and discovered a bug in our rollout procedure. We expected that when our change was applied, both our caching name servers and authoritative name servers would receive updated configuration - including their new IP addresses - and restart to apply this configuration. Both name servers received the appropriate configuration changes, but only the authoritative name server was restarted due to a bug in our Puppet manifests. As a result, our caching name server was requesting authoritative DNS records from an IP that was no longer serving DNS. This bug created the initial connection timeouts we observed, and began a cascade of events._

_from Github's [Post Mortem](https://github.com/blog/1759-dns-outage-post-mortem)_

Similar to the case with Dropbox, had they team been able to test this patch, they could have avoided this issue with their DNS records. 

### How a DNS error at Microsoft took down Azure for two Days

_TL;DR Microsoft upgraded a configuration change across their entire system that interrupted Azure’s service for two days_

In November 2014, Microsoft reported an interruption to their Azure service. 

_The configuration change had been introduced as part of an Azure Storage update to improve performance as well as reducing the CPU footprint for the Azure Table Front-Ends. This change had been deployed to some production clusters for the past few weeks and was performing as expected for the Table Front-Ends.
As part of a plan to improve performance of the Azure Storage Service, the decision was made to push the configuration change to the entire production service.
The configuration change for the Blob Front-Ends exposed a bug in the Blob Front-Ends, which had been previously performing as expected for the Table Front-Ends. This bug resulted in the Blob Front-Ends to go into an infinite loop not allowing it to take traffic._
_From Microsoft's [Post Mortem](http://azure.microsoft.com/blog/2014/11/19/update-on-azure-storage-service-interruption/)_

Yikes! Infinite loops. Although the team did run the update on a small subset of production servers--which is a good practice in performance testing-- they ran into a bug when it was rolled out to their entire system and exposed to new apps. Anyone running their business on Azure had their services fail, largely because of this rollout was only a two stage process -- when it should have been rolled out in multiple stages to avoid system-wide outages -- but also because it was not tested on a replica of their production environment before it was deployed. 

### Stop coding on pigs.

With [Bowery](http://bowery.io/), your code, software and operating systems are all in-sync across your team and organization leading to greater productivity and better development. When it comes time to upgrade a database or change versions of your language, the process is swift and painless. Bowery makes it easy to share new environments with other team members. 

By staying in-sync you can keep the gap between your development, staging and production environments as small as possible. By keeping your team’s stack and versions up-to-date across all projects, you remove the small incompatibilities across your team that cause disruption in the software delivery process. Don’t worry about builds failing in production because of a tool gap. With Bowery your team can keep development and production parity across your team.

Get monthly news from Bowery on new features, productivity hacks and Bowery events in your area. 

<form action="https://formkeep.com/f/a9d9bd96ce41" method="POST" class="subscribe" style="overflow: hidden; margin-bottom: 20px;">
  <span class="cover email-cover" style="background: rgb(191, 191, 191);"></span>
  <input class="email-submit" type="email" name="email" placeholder="newsletter" required="" style="color: rgb(198, 198, 198)">
  <span class="cover submit-cover"></span>
  <input type="submit" value="signup" style="background: rgb(198, 198, 198);">
</form>

Follow Bowery on Twitter [@Boweryio](https://twitter.com/boweryio)
