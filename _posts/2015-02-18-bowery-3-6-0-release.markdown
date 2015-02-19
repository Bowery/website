---
layout: post
title:  "Bowery 3.6.0 Release"
date:   2015-02-18 10:00:00
categories: posts
tags:
- releases
---

We're excited to announce our latest release, [Bowery 3.6.0](http://bowery.io/docs/downloads) which comes along with two long-awaited features that simplify getting started with Bowery and Docker and help team collaboration:

1. Launch from a Dockerfile
2. Team permissions

## Docker

We're making our Docker integration even tighter. If you have a `Dockerfile` inside your application's directory, you'll have the option to build a new environment out of this file. Once it's launched it's ready to go! With this change also brings support for linux distributions besides Ubuntu 14.04. To read more about using Dockerfile's with Bowery, [read here](/docs/getting-started).

## Permissions

You can now set write access permission to certain users in your project. After you've launched your environment with the Bowery Terminal, head to `File > Info`. You'll see a new info window that'll show you some basic info about your application. If you check out "People" you'll see everyone who has worked on your project. This makes it easy to manage permissions within your team. You can now include your `.bowery` file in a public repo and make sure users can't change the environment you've set!

![Bowery 3.6.0 Permissions](/static/permissions-people.png)

<div>
<form class="form">
    {% for f in page.fields %}
      {% for field in f %}
        <input class="field" type="text" placeholder="{{field[1]}}" name="{{field[0]}}">
      {% endfor %}
    {% endfor %}
    <a class="btn" href="http://bowery.io/docs/downloads">Download Bowery 3.6.0&rarr;</a>

  </form>
</div>
<br/>
Learn more about the new version and provisioning your development environments with Bowery and Docker at our free Webinar on February 25

<div>
<form class="form">
    {% for f in page.fields %}
      {% for field in f %}
        <input class="field" type="text" placeholder="{{field[1]}}" name="{{field[0]}}">
      {% endfor %}
    {% endfor %}
    <a class="btn" href="https://attendee.gotowebinar.com/register/3411168119429103873">register &rarr;</a>

  </form>
</div>
