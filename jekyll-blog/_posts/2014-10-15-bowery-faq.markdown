---
layout: post
title:  "Bowery FAQ"
date:   2014-10-15 13:00:54
categories: posts
---

Here's our list of common questions and issues reported by the developer community.

### Why do I need an AWS account to use Bowery.io?

What makes Bowery.io special is that we take your handcrafted code and make it run in the cloud, so you don't have to worry about running application environments locally. This lets you bypass version conflicts, operating system dependency issues, and a host of other operational problems. As a bonus your code can be previewed by others, for true collaborative development.

### What are AWS keys, and how do I get them?

Once you have your own AWS account, you can get your own access keys which makes it easy for other applications and tools to connect to your infrastructure. Please see the [Amazon instructions for getting your access keys](http://docs.aws.amazon.com/general/latest/gr/getting-aws-sec-creds.html).

### Do I need to get a Bowery.io account before running the desktop app?

You can sign up from within the app itself. Easy peasy!

### What languages do you support?

Bowery.io supports a great many languages. Right now our base images are derived from a stock Ubuntu 14.04 LTS server image. Ultimately you can run whatever is supported on that platform. Ruby, Python, Node, PHP, and many more.

### Can I use a full-stack platform with Bowery.io, like Joomla, Wordpress or Drupal?

Absolutely - we are providing default images for all of the above, as well as adding new ones daily as they are needed. With the images will be dedicated posts explaining how to get started in each particular stack.

### I need to do stuff on the server though, how is that done?

You can execute remote commands right from the desktop, by clicking on your app and scrolling to the bottom left where you can open a command window. For those of you that need some real hands-on quality console time, you can always ssh into your instance just like the old days.

### How are these images created?

All of our images are based on the Ubuntu 14.04 LTS image. How it works is you create your app, then run whatever commands you need via the remote command tool, and then you can save your own image for instant gratification. This is exactly how we created all of our example images for specific tools like Joomla!, Wordpress, Node, and so on.

