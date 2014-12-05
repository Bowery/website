---
layout: post
title:  "Bowery Documentation"
date:   2014-10-23 13:00:54
categories: posts
---

Welcome to the Bowery docs! This page covers everything you need, want, and wish you knew about Bowery in (often excruciating) detail. If you're just getting started, follow our getting started guide.

### Table of contents

* [Download and Install Bowery](#install)
* [Getting started](#getting-started)
* [Content Management Systems (CMS)](#content-management-systems-cms)
  * [Wordpress](#wordpress)
  * [Drupal](#drupal)
  * [Joomla](#joomla)
* [Languages](#languages)
  * [Node.js](#nodejs)
  * [PHP](#php)
  * [Ruby on Rails](#ruby-on-rails-ror)
* [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

### Install

Download Bowery for Windows, Mac, or Linux:

- [Mac OS X](http://desktop.bowery.io/3.3.1_darwin_amd64.zip)
- [Windows 32-bit](http://desktop.bowery.io/3.3.1_windows_386.zip)
- [Windows 64-bit](http://desktop.bowery.io/3.3.1_windows_amd64.zip)
- [Linux 32-bit](http://desktop.bowery.io/3.3.1_linux_386.zip)
- [Linux 64-bit](http://desktop.bowery.io/3.3.1_linux_amd64.zip)
- [Checksum](http://desktop.bowery.io/3.3.1_SHA256SUMS)

Unzip the file, and on Windows and Mac simply double-click the installer to install Bowery.

On Linux you’ll need to run the include script from the command line. Read the included README file for details(If you run into issues read the FAQ below).

### Getting Started

#### Step 1: **Sign Up or Log In** 

The first time you run Bowery you’ll be instructed to create an account, if you don’t have an account on Bowery follow along with the form. If you already have an account click “I already have a Bowery account.” and then follow the form to log in.

After you sign up or log in you’ll be presented with the applications page which lists the applications you’ve created. Click “Add App” at the bottom to continue getting started.

#### Step 2: **Configure Hosting**

Bowery apps run on AWS. You can choose to have Bowery host the apps for you on AWS or you can enter your own AWS credentials to host it on your own instances. Bowery is free for the first 30 days of use. If Bowery is hosted on our servers, we will begin billing after that period. Learn more about our pricing plans [here](http://bowery.io/blog/posts/2014/10/28/bowery-pricing.html)

#### Step 3: **Add an App** 
	
In the app you will be prompted to choose an [image](http://bowery.io/images/). Images contain extra software and configuration that make it simple to run software for various software stacks, each are built from the “Ubuntu 14.04 LTS” image. If you can’t find an image suitable for your needs you can choose the “Ubuntu 14.04 LTS” image and install any software you need yourself. After choosing an image, Bowery will start provisioning an app using the image selected.

#### Step 4: **Configure your App**

Bowery will sync file changes and restart your app when a change occurs. To do this we need to know where your code lives and what command starts your application. There’s also an optional field that sets where code should be stored on the remote machine, the default should be fine for most people, but if your application requires a specific location you can set it there.

Once this is complete your app will upload your code and then start syncing your changes. An IP address is also given on the applications page where your code is being synced, so you can see changes as you make them.

#### Next Steps 

If you click on your applications name on the applications page, you’re given a list of things you can do to interact with the application:

* Copy the IP address for your application, this allows you to share your changes with others.
* Edit the application to update commands, or the sync path.
* Exec commands and view application logs.
* Publish the image for your application, this includes commands you’ve executed.
* Delete the application.

<!--<img src="http://bowery-blog.s3.amazonaws.com/desktop/docs/cms.png" id="content-management-systems-cms" />-->

### Content Management Systems (CMS)

#### Wordpress

Here's a walkthrough of what it takes to [set up Wordpress on Bowery](http://bowery.io/blog/posts/2014/10/21/getting-started-with-wordpress-and-bowery.html).

#### Drupal

We have a detailed blogpost about [how to set up Drupal on Bowery](http://bowery.io/blog/posts/2014/10/21/getting-started-with-drupal-and-bowery.html) .

#### Joomla 

Read about how you can [set up Joomla on Bowery](http://bowery.io/blog/posts/2014/10/21/powering-joomla-websites-with-bowery.html).

<!--<img src="http://bowery-blog.s3.amazonaws.com/desktop/docs/languages.png" id="languages" />-->

### Languages

#### Node.js

[Getting started with Node.js and Bowery](http://bowery.io/blog/posts/2014/10/21/getting-started-with-node-and-bowery.html) is all about how to set up Node.js on Bowery.

We also have screencasts showing you how to get started with [Node.js on Windows](https://www.youtube.com/watch?v=44gQc2fZOQg) and a similar [Node.js on OSX](https://www.youtube.com/watch?v=NWai4gy0EzE).

#### PHP

We demonstrate how to [work with MySQL and PHP](http://bowery.io/blog/posts/2014/12/04/working-with-mysql-and-php.html).

There's also an excellent article on [using Laravel with Bowery](http://bowery.io/blog/posts/2014/10/31/laravel-development-with-bowery.html). There is also an equally excellent screencast by [PHP Academy](http://phpacademy.org/) showing how easy it is to [set up Laravel on Bowery](https://www.youtube.com/watch?v=f131IP6V3Sw).

Lastly some pointers on getting up and running with [phpMyAdmin](http://bowery.io/blog/posts/2014/12/01/phpmyadmin-support.html).

### Ruby on Rails (RoR)

It is easy to [setup Ruby on Rails with Bowery](http://bowery.io/blog/posts/2014/10/24/getting-started-with-rails.html).

### Frequently Asked Questions (FAQ)

#### How do I use Bowery with a database?

We support [MySQL](http://dev.mysql.org), and show how to use [phpMyAdmin](http://bowery.io/blog/posts/2014/12/01/phpmyadmin-support.html), as well as [working with MySQL and PHP](http://bowery.io/blog/posts/2014/12/04/working-with-mysql-and-php.html).

We also support [MongoDB](http://mongodb.org) out of the box, and show how you can [develop with Node.js and MongoDB](http://bowery.io/blog/posts/2014/11/12/node-and-mongodb-development-with-bowery.html)

#### Can Bowery see my code?

Bowery doesn’t look at the code you write, it simply checks if changes have been made and copies it to the remote machine, afterwards it restarts the command you provided when you created the application.

#### How do I install Bowery on Linux?

Once you download the appropriate zip file above for your system, unzip it into a directory. After that you’ll need to open a terminal and `cd` into the directory you unzipped the contents to. Next you need to give the `bowery.run` file permissions to be executed on your machine, to do this run `chmod +x bowery.run` in your terminal. Finally just run the script by typing `./bowery.run` in your terminal. As Bowery is installed it may ask for your password so it can install files in the right place.

#### How do I prevent certain files from syncing?

By default all paths excluding common version control directories(`.git`, `.hg`, `.svn`, `.bzr`) are synced. To exclude other paths place a file named `.boweryignore` in the root of your project and place the paths you’d like to ignore, the format is similar to `.gitignore` (here is a [reference to .gitignore syntax](http://git-scm.com/docs/gitignore)) and includes support for wildcards (`*`).