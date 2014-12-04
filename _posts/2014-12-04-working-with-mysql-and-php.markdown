---
layout: post
title:  "Working with MySQL and PHP"
date:   2014-12-04 14:00:00
categories: posts
---

We are getting requests for information on how our base server images are configured, specifically regarding database support. This post is all about showing how easy it is to leverage databases - [MySQL](http://dev.mysql.com) in this case, although many other databases are also supported.

### The short story

Really you just need to use the provided MySQL in your code:

* database: `defaultdb`
* user: `root`
* pass: `changeme`
* host: `localhost`

As long as your code is using that configuration you should have access to the database that is already up and running on your instance.

### The long story

We already discussed [using phpMyAdmin](/blog/posts/2014/12/01/phpmyadmin-support.html) which allows you to have a web-based database browser for your PHP projects. Here's a [dead-simple example PHP script](https://gist.github.com/spacemonkey/3ec5b9c406c9fb16846e) that shows how you can work with your database. Feel free to also add phpMyAdmin to your project and you can check the database at each step.

## CODE SAMPLE

<script src="https://gist.github.com/spacemonkey/3ec5b9c406c9fb16846e.js"></script>

### But wait, there's more

If you are using a language other than PHP, or you need something other than MySQL, we got you covered. You can work with [MongoDB](http://mongodb.org) right out of the box (listening on localhost only, without authentication).As our base image is Ubuntu 14.04 LTS, you can install just about whatever database and driver you could imagine.

We are working on a new release that will make customizing your environment very easy, and give you a ton of control. Stay tuned!

Having trouble getting this running? We are here to help, and we're always looking for requests! Reach out to us at [@boweryio](http://twitter.com/boweryio).