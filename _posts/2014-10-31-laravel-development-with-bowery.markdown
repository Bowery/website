---
layout: post
title:  "Laravel Development with Bowery"
date:   2014-10-31 13:00:54
categories: posts
---

We have a shiny new image up for the PHP crowd, sporting a fresh PHP 5.5 with [Composer](https://getcomposer.org "Click to visit the Composer project home page") support. This post shows how you can get up and running with a [Laravel](http://laravel.com "Here is the main Laravel website") app using this ready-made image.

> For this quickstart you will need nothing more than a web browser, a text editor of your choice, and the [Bowery desktop](http://bowery.io/start/).

First you're going to want to get your hands on a stock Laravel app skeleton. You can [go through the generated installs like these](http://laravel.com/docs/4.2/quick#installation "Installation howto at Laravel website"), or you can just [download the codebase straight from GitHub](https://github.com/laravel/laravel/archive/master.zip "Click to download the whole shebang").

> NOTE: This location where you keep your local copy of the code is your `Local Path` and will be needed when you create your app using the Bowery desktop.

Now it's time to fire up the Bowery app, You will be greeted with the `Bowery Login` form as shown below. You can either plug in your details if you already have an account, or register right from the app itself.

![Bowery Login Form](http://bowery.io/static/install-screen.png)

Once you have that done, it's time to add your Amazon Web Services (AWS) credentials.

![Bowery Connect AWS Form](http://bowery.io/static/aws-screen.png)

If you don't have an AWS account you're going to be needing one. Likewise if you don't know your AWS keys then you can find them thanks to [this helpful post from Amazon](http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html "Click to figure out where your AWS keys are").

Now you're ready to fire up that Laravel app! From the app you can hit the `CREATE APP` button, which takes you to a `select image` form where you should search for `PHP 5.5 with Composer`. Once that image is selected, you can enter the information as shown below, with of course the correct path to your local Laravel folder for the `Local Path` setting.

![Bowery desktop app settings](http://bowery-blog.s3.amazonaws.com/desktop/laravel/app_screen.png)

Here's a quick explanation for each of these fields:

* *Name:* This can be whatever you want to call your app. Since Bowery supports multiple apps per account, you can have many apps all shown in a list, so a descriptive name is a good idea.
* *Click to edit image.*  For this app, you should have selected the `PHP 5.5 with Composer` image. There are [many more images here](http://bowery.io/images/ "Click to see the Bowery supplied images, and search for anything in particular"), including Ruby on Rails, Node.js with Express, Joomla!, Drupal, Wordpress, and more. You can also create your own.
* *Command That Runs App:* This is what runs your app on the server, and in the case of this particular app it should be `COMPOSER_HOME="/home/ubuntu/app" composer install && php artisan serve --port 3000 --host 0.0.0.0`. We explain what all this means later in this quickstart.
* *Remote Path:* The default is `/home/ubuntu/app` which is perfectly find for this purpose. For other platforms you might need to change this to another location for support with nginx or some such.
* *Local Path:* This is where your Laravel code was downloaded to on your computer. This is the directory that Bowery scans for changes.

When all these fields are filled out, hit `SAVE` and Bowery then does the following:

1. Provisions an EC2 instance from the `PHP 5.5 with Composer` image
1. Runs a handful of commands associated with that image to setup composer and any Laravel requirements (such as php5-mcrypt)
1. Synchronizes your `Local Path` with the `Remote Path`, effectively copying your code to the server
1. Runs the start command, which in this case is `COMPOSER_HOME="/home/ubuntu/app" composer install && php artisan serve --port 3000 --host 0.0.0.0`

So what exactly is that start command? We use some UNIX trickery and actually run a couple different commands. 

The first command, `composer install` needs to know where the `COMPOSER_HOME` is so we set that before running the command. This essentially fires up composer, which is an awesome tool for PHP developers to automate fetching and using additional PHP libraries and extensions. Consider it a PHP alternative to Node's `npm` or Ruby on Rails' `bundler`.

Then we use two ampersands `&&` telling the shell that there's another command coming, and then issue `php artisan serve --port 3000 --host 0.0.0.0`. This requires PHP 5.4+, as it actually uses a built in server provided by the PHP core. We are telling it to listen on port 3000, and giving it a host of `0.0.0.0` tells it to listen on all network interfaces, not just localhost.

Now that the app is provisioning, you should see the app listing screen; and when you see an IP address under your app name (like below) you know where you can now find your app!

![Bowery desktop app list](http://bowery-blog.s3.amazonaws.com/desktop/laravel/app_list.png)

> The IP address will be different for every single app you launch with Bowery, and will not be the same as the one you see in the image above. Please be sure to use the actual IP address that you got for your app!

Now it is time to see the app in action: Fire up the browser of your choice, and go to your IP address, with port 3000. In my case, the IP address was 54.160.111.121, so my app was hosted at `http://54.160.111.121:3000/`.

> NOTE: Remember your app will be firing up on port 3000, so your standard URL will not work. In an upcoming release you'll have your ports taken care of automatically for you by the desktop.

Now you can see the magic, by opening up your Laravel codebase in your favorite editor, and changing a file. For my example, I'm going to update the default view for a Laravel app, which happens to be the `hello` view.

![Laravel default hello view](http://bowery-blog.s3.amazonaws.com/desktop/laravel/welcome.png)

I'm adding some additional text to the Laravel default greeting. Once I save that file, I can count to ten, do a small jig in front of my laptop, and *boom* there's my updated view on the server.

![Laravel hello view, with Bowery](http://bowery-blog.s3.amazonaws.com/desktop/laravel/welcome_bowery.png)

## What is going on here?

The Bowery desktop is scanning your `Local Folder` for file changes, and as soon as it sees something, it immediately fires off a sync with the server on AWS. When that sync is complete, it then executes your `Remote Command` which tells the php development server to restart.

One additional bonus - by including the `composer install` part for your `Remote Command`, you can also make changes to the libraries and extensions that your Laravel app is using. So you can add [MongoDB document database](http://www.mongodb.org/ "My all-time favorite database thingie") support, hook into a [Redis cache](http://redis.io/ "Wicked fast cache"), wire in [Stripe payment processing](https://packagist.org/packages/stripe/stripe-php), or a [great many other things supported by composer](https://packagist.org "Packagist, where all composer packages are catalogued and searchable for optimum freshness").