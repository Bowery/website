---
layout: post
title:  "PhpMyAdmin Support"
date:   2014-12-01 14:10:00
categories: posts
---

We received a support request from someone wanting to know how they could get [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php) up and running on their Bowery-powered app. I set out to see how hard it would be, and was surprised that it was even easier than I'd expected (which was pretty easy). Here's how you do it.

### The Summary

If you choose the ```Wordpress``` image for example, you have a preconfigured AWS instance with php, php-fpm, nginx, mongodb and mysql all ready and waiting for you. You can drop in a copy of phpMyAdmin into your code folder and access it right from your IP address. As outlined in this post about [Getting Started with Wordpress and Bowery](http://bowery.io/blog/posts/2014/10/21/getting-started-with-wordpress-and-bowery.html), your default mysql user is ```root``` and your pass (and not-so-subtle request) is ```changeme```.

If you know your way around PHP, that should get you up and running. If not, read on for detailed instructions.

### The Long Version

This is the process, one step at a time:

- Create new app,
- Provision instance,
- Add phpMyAdmin, and then
- You're done.

Here's the easiest way to reproduce a working phpMyAdmin for your app. First create a new app, and select the Wordpress image. Don't worry, this image doesn't require or install Wordpress, it is just one we have created to help you get up and running immediately for that type of environment.

Once you have that up, you can configure your app just like the [Wordpress tutorial](http://bowery.io/blog/posts/2014/10/21/getting-started-with-wordpress-and-bowery.html) with the remote directory set to ```/var/www``` and pointing at your local PHP code.

> NOTE: For any PHP app to work, you will need to use ```/var/www``` for your remote directory. This is where we have told nginx to look for code, and you'll have to manually connect and override this if you want your PHP app to run from somewhere else.

Once you are at that point and have provisioned your app, you should be able to either surf to your PHP app or the welcome page on your new IP address.

> *What's My IP?* If you look at your app in Bowery, you will see the IP address shown just below the name of your app.

#### Adding phpMyAdmin

At this step, you can unzip/untar/un7 your copy of phpMyAdmin from the download page right inside your app folder. Imagine you placed your local copy of phpMyAdmin in a folder called ```phpMyAdmin```. You should now be able to open a browser to your IP address and the path of ```/phpMyAdmin```.

> TIP: Most webservers are case sensitive, so there is a difference between going to ```/phpMyAdmin``` and ```/phpmyadmin```.

At this point you should be greeted with the standard login screen for phpMyAdmin! Remember that you have the following setup for you as default:

* database: `defaultdb`
* user: `root`
* pass: `changeme`
* host: `localhost`

Having trouble getting this running? We are here to help, and we're always looking for requests! Reach out to us at [@boweryio](http://twitter.com/boweryio).