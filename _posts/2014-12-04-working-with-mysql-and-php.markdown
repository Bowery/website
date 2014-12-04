---
layout: post
title:  "Working with MySQL and PHP"
date:   2014-12-04 14:00:00
categories: posts
---

We are getting requests for information on how our base server images are configured, specifically regarding database support. This post is all about showing how easy it is to leverage databases - in this case [MySQL](http://dev.mysql.com), although many other databases are also supported.

### The short story

The base server image provided by Bowery has MySQL and MongoDB configured and running by default, and MySQL in particular has a user and database created for you. Here are the details of the base setup:

* database: `defaultdb`
* user: `root`
* pass: `changeme`
* host: `localhost`

As long as your code is using that configuration you should be able to connect and use the database that is already up and running on your instance.

### The long story

We already discussed [using phpMyAdmin](/blog/posts/2014/12/01/phpmyadmin-support.html) which allows you to have a web-based database browser for your PHP projects. Here's a [dead-simple example PHP script](https://gist.github.com/spacemonkey/3ec5b9c406c9fb16846e) that shows how you can work with your database. Feel free to also add phpMyAdmin to your project and you can check the database at each step.

## CODE SAMPLE

<script src="https://gist.github.com/spacemonkey/3ec5b9c406c9fb16846e.js"></script>

### But wait, there's more

If you are using a language other than PHP (such as [Node.js](/blog/posts/2014/11/12/node-and-mongodb-development-with-bowery.html) or [Ruby on Rails](/blog/posts/2014/10/24/getting-started-with-rails.html)), or you need something other than MySQL, such as [MongoDB](http://mongodb.org) [right out of the box](/blog/posts/2014/11/12/node-and-mongodb-development-with-bowery.html) or [Orchestrate.io](/blog/posts/2014/11/05/orchestrate-bowery.html), we have you covered. As our base image is Ubuntu 14.04 LTS, you can install just about whatever database and driver you could imagine.

We are working on a new release that will make customizing your environment very easy, and give you a ton of control. Stay tuned!

Having trouble getting this running? We are here to help, and we're always looking for requests! Reach out to us at [@boweryio](http://twitter.com/boweryio).