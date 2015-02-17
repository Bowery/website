---
layout: post
title:  "Bowery 3.6.0 Release"
date:   2015-02-17 10:00:00
categories: posts
tags:
- releases
---

We're excited to announce our latest release, Bowery 3.6.0 which comes along with two pretty great features:

1. Launch from a Dockerfile
2. Team permissions

## Docker

We're making our Docker integration even tighter. If you have a `Dockerfile` inside your application's directory, you'll have the option to build a new environment out of this file. Once it's launched it's ready to go! With this change also brings support for linux distributions besides Ubuntu 14.04. To read more about using Dockerfile's with Bowery, [read here](/docs/getting-started).

## Permissions

You can now set write access permission to certain users in your project. After you've launched your environment with the Bowery Terminal, head to `File > Info`. You'll see a new info window that'll show you some basic info about your application. If you check out "People" you'll see everyone who has worked on your project. This makes it easy to manage permissions within your team. You can now include your `.bowery` file in a public repo and make sure users can't change the environment you've set!

![Bowery 3.6.0 Permissions](/static/permissions-people.png)

Grab the [3.6.0 here](http://bowery.io/docs/downloads).
