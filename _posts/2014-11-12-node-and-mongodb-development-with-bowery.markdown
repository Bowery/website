---
layout: post
title:  "MongoDB and Node.js Development With Bowery"
date:   2014-11-12 14:10:00
categories: posts
---

In previous posts we've shown how quickly you can [get started with Node.js and Bowery](http://bowery.io/blog/posts/2014/10/21/getting-started-with-node-and-bowery.html), and want to demonstrate how easy it is to start working with MongoDB as well.

### Getting Started

There are many existing projects that use Node.js and MongoDB, and for simplicity we will use the [expressSimpleBlog](https://github.com/cubuzoa/expressSimpleBlog) project that uses [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), [MongoDB](https://www.mongodb.org/), and [Mongoose](http://mongoosejs.com/) for a quick and easy blogging platform that stores data in a MongoDB database.

Clone this project in a local directory on your machine. If you don't have git on your system, you can always just download straight from the Github website. Once you have the project downloaded, you can fire up Bowery and create an app.

> We have created a Node.js image for you, just select it when you are creating your app and we will take care of the rest!

For my system it looks like this:

![Bowery app details](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/app.png)

Once your app has been provisioned, you will see an IP address under your app's name:

![Bowery app with provisioned IP address](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/app_provisioned.png)

> Each app will be issued a different IP adress, so make sure to use the one for your app!

### Using The Blog

This example app already has everything configured to go, and should be running. Go to your IP address and port as listed in Bowery and you should be greeted with a welcome page.

![Welcome page](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/welcome.png)

You can register using the `Register` link at the top of the page, which will create an account for you and store that data in the MongoDB database.

![Register form](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/register.png)

Once you've registered, you'll need to login using the top right:

![Login form](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/login.png)

From this point you should see your email address on the top right, and the greeting page for the blog. By clicking on the caret after your email address, you should have a short menu that allows you to create a new blog post or logout.

![Menu](http://bowery-blog.s3.amazonaws.com/desktop/node-and-mongodb/menu.png)

### Now What?

You have your Node.js / MongoDB blog up and running on the cloud, and are now free to start making changes to the code. Perhaps you want to add more properties to the user document, or tweak how blog posts are organized? All can be done from your local machine and transparently copied up to the server via Bowery.

Open `models/User.js` in the editor of your choice to look around. Mongoose provides schema support, so you can define schema restrictions and even validation for each property. You will see a similar approach in the `models/Blog.js` file for blog posts.

To see *how* this data gets processed and checked, take a look at `controllers/UserController.js` and `controllers/BlogController.js`. Here you can see how registration, authentication, and blog post creation is handled.

There are also views in this app, using the Jade template engine. The main view for the website is in `views/index.jade`. You will find many other views in that directory, including defaults for different errors (such as 404 and 500), as well as the main website layout (`views/layout.jade`) and forms for registration, login and blog post creation.

I hope this is a great example of how to play with a working Node.js / MongoDB app without having to install anything locally on your machine, and also illustrates how Bowery makes it easy to code locally while your apps are running on the cloud.

We are always looking for requests, so reach out to us at [@boweryio](http://twitter.com/boweryio).
