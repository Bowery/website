---
layout: post
title:  "Getting started with Bowery and Joomla"
date:   2014-10-21 15:11:54
categories: posts
description: "Step by step guide on setting up a Joomla app using Bowery."
---

Now we start the fun stuff, working with full-stack applications like Wordpress, Drupal and Ghost. This post will focus on [Joomla](http://joomla.org/), a leading content management system known for a huge third party developer community and powerful tools for skinning your sites.

First step of course is to walk through getting signed up and ready for action. Come back once you're [running with the Bowery desktop](/start/ "Click to read Getting Started") and you're ready to create a Joomla-powered app.

### App creation

![Create app](http://bowery-blog.s3.amazonaws.com/desktop/joomla/joomla_app_screen.png "Example Joomla 3.3 app configuration")

Now that you have your AWS and Bowery accounts ready to go, and the desktop app up and running with your keys, it's Joomla time.

Download the latest and greatest Joomla release (or the particular one you need for your project) and store it locally on your machine. This path is your `local directory` which we will be using for the app creation process.

You can click `New App` and [browse for the Joomla image](http://bowery.io/images/), we created this image to already have php, nginx, mysql and a default database ready for you.

With the image and name taken care of, you'll need to add the start command for your app, which in this case happens to be an adjustment for directory permissions:

```
chown -R www-data:www-data /var/www
```

This is necessary for nginx to keep the filesystem permissions matching the owner of the webserver, in order for you to be able to save files to the filesystem on the server.

Once done you can name your app, and be sure to use `/var/www` as your remote directory.

> NOTE: Your remote directory must be /var/www or none of the commands will work, and that is also where nginx will be looking for your PHP code.

When you hit `Save` your app will be provisioned on your AWS account using EC2 and our image. Almost done!

### Joomla setup

Once your app is provisioned and running your desktop should show an IP address, which is the public IP address of your new development machine. If you open that in a browser you should be looking at the familiar [Joomla installation screen](http://bowery-blog.s3.amazonaws.com/desktop/joomla/joomla_installer.png). Here is an example of the [Joomla database config](http://bowery-blog.s3.amazonaws.com/desktop/joomla/joomla_installer_db.png) as supported by this image.

Since you chose the Joomla app image at app creation time, we already have a MySQL database setup for you with the root user.

* database: `defaultdb`
* user: `root`
* pass: `changeme`
* host: `localhost`

You should be able to walk through the Joomla install process just like normal.

### But wait, there's more

Now the fun of Bowery begins. Every time you save a file on your local copy of the Joomla website, the Bowery desktop will sync that to your server. This makes it possible for you to code "real time" on a Joomla site without having any apache, php or mysql available on your local machine! This also means you can give the IP address to your coworkers/teammates so you can see the work as it progresses.
