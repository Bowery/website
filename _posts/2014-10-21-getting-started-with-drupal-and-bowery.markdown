---
layout: post
title:  "Getting started with Drupal and Bowery"
date:   2014-10-21 23:25:16
description: "Step by step guide on setting up a Drupal project using Bowery."
categories: posts
tags:
- tutorials
- drupal
---

Follow this guide for getting a Drupal project up and running with Bowery.

> NOTE: The steps are identical for setting up Joomla and Wordpress as well, but are added here separately for your convenience.

### Install Bowery

As in our other articles about using Bowery with your own projects, you'll need to be [getting your AWS credentials](http://docs.aws.amazon.com/general/latest/gr/getting-aws-sec-creds.html) and [Bowery.io account setup](/start/ "Click to read Getting Started"). Come back here when you have your AWS credentials and Bowery account added, and are ready to create that first Wordpress app.

### Create Your App

![Create app](http://bowery-blog.s3.amazonaws.com/desktop/drupal/drupal_app_screen.png "Example Drupal app configuration")

You can click `New App` and [browse for the Drupal image](http://bowery.io/images/), we created this image to already have php, nginx, mysql and a default database ready for you. The Drupal installer requires a database to be created in advance which we've done (the information is later in this article).

With the image and name taken care of, you'll need to add the start command for your app, which in this case happens to be an adjustment for directory permissions:

```
chown -R www-data:www-data /var/www
```

This is necessary for nginx to keep the filesystem permissions matching the owner of the webserver, in order for you to be able to save files to the filesystem on the server.

Once done you can name your app, and be sure to use `/var/www` as your remote directory.

> NOTE: Your remote directory must be /var/www or none of the commands will work, and that is also where nginx will be looking for your PHP code.

When you hit `Save` your app will be provisioned on your AWS account using EC2 and our image. Almost done!

### Configure Drupal

Once your app is provisioned and running your desktop should show an IP address, which is the public IP address of your new development machine. If you open that in a browser you should be looking at the familiar [Drupal installation screen](http://bowery-blog.s3.amazonaws.com/desktop/drupal/d7_installer.png). Here is an example of the [Drupal database config](http://bowery-blog.s3.amazonaws.com/desktop/drupal/d7_installer_db.png) as supported by this image.

Since you chose the Drupal app image at app creation time, we already have a MySQL database setup for you with the root user.

* database: `defaultdb`
* user: `root`
* pass: `changeme`
* host: `localhost`

You should be able to walk through the Drupal install process just like normal.

### See Live Changes

Now the fun of Bowery begins. Every time you save a file on your local copy of the Drupal website, the Bowery desktop will sync that to your server. This makes it possible for you to code "real time" on a Drupal site without having any apache, php or mysql available on your local machine! This also means you can give the IP address to your coworkers/teammates so you can see the work as it progresses.
