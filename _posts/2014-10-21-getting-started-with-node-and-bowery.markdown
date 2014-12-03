---
layout: post
title:  "Getting started with Node and Bowery"
date:   2014-10-21 15:11:54
description: "Step by step guide on setting up a Node.js app using Bowery."
categories: posts
tags:
- tutorials
- node.js
---

Ever wanted to kick the tires with Node.js without installing a ton of stuff on your local machine? This is exactly how it is done.

### Install Bowery

> First walk through [getting your AWS credentials](http://docs.aws.amazon.com/general/latest/gr/getting-aws-sec-creds.html) and [Bowery.io account setup](/start/ "Click to read Getting Started"), and then come back when you are ready to get your Node groove on.

### Configure Your App

You'll be needing a local node app. One of the easiest ways to do this is with an [example app like the one we provide](https://github.com/Bowery/node-example). This particular app is a Node.js app using the Express web framework. This is an extremely common stack to base web development on.

![Create app](http://bowery-blog.s3.amazonaws.com/desktop/node/node_app_screen.png "Example Node.js/Express app configuration")

Once you have a local codebase to work with, it's time to create your first app. Fire up the Bowery desktop client, plug in your AWS credentials and Bowery.io account, and hit the `Create App` button.

For the name you can obviously pick whatever suits you. I chose the rather unsurprising "My Node" for this tutorial.

For the image, you can search for the `Node 0.10` image which we provide as an easy way to get started.

Now for the important parts - you need to use the following for your command:

```
npm install && node ./bin/www
```

This only works for an express app that was created with the express-generator package, as that is how this particular app was set up. If you are using vanilla Node, or another framework such as Sailsjs or some such you will need to use the appropriate command here.

What really needs to be understood is that first you'll need to always call `npm install` whenever you update code, as that might be a change to `package.json` that requires that command to be run on your server. The rest is the additional command that actually starts the server.

For your local directory, that is where you are storing the code on your local machine.

### Try It Out

By this point you should have your Node.js/Express app up and running on your own EC2 instance, which is really when the fun starts. You can now make changes to any of the files on your local machine, and when you save those are synced to the EC2 instance, then your command gets run again to restart the app.

This means you can now include new npm packages, configure additional environment settings or of course just dig in and start coding new apps! This is an awesome experience for prototyping in front of designers or project clients, as they can see while you are making your changes despite you working on a local machine - usually a laptop that is not serving apps to the public.

There are more example apps in the works, with some images already available for use. Let us know if there's a particular stack you want to see supported, or feel free to make your own image.
