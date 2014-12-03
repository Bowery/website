---
layout: post
title:  "Getting started with Rails and Bowery"
date:   2014-10-24 15:11:54
categories: posts
description: "Step by step guide on setting up a Rails app using Bowery."
tags:
- tutorials
- ruby on rails
---

One environment that really demonstrates the value of Bowery is [Ruby](https://www.ruby-lang.org/en/ "Click to visit the main Ruby language website") on [Rails](http://rubyonrails.org "Click for the main Ruby on Rails website"). There are many instances where it is less-than-ideal to have a full-blown development environment setup, and I'm going to use myself as an example.

My main laptop had a logic board failure, which is a major deal for a MacBook Pro. I was told I'd live without my workhorse laptop for a week while the over-booked repair team took care of the work.

My previous laptop hadn't seen my loving hands in more than three years. Needless to say the entire ruby environment on this laptop was a disaster. During that time, this laptop went from Lion to Mountain Lion, to Mavericks, and now to Yosemite.

I ended up removing everything on the machine that was ruby related, starting with this excellent blog post about [how to install ruby properly](http://cbednarski.com/articles/installing-ruby/). There's a section at the bottom of that post explaining the easiest ways to rid yourself of stale local installs, and there are also great examples on [Stack Overflow](http://stackoverflow.com/questions/8095209/uninstall-all-installed-gems-in-osx "Great post on Stack Overflow for OSX") and other sites too.

Once I had removed all gems and related cruft, I could setup rbenv with a nice clean ruby 1.9.3 install with rubygems 1.8.23 and rails 4.1.6.

> Just like all the other getting started guides from this blog, I'm expecting you to have already walked through the AWS credentials and Bowery account signup steps in the Bowery app before getting to this point.

Now that we're ready to start building, I generated a very basic rails app with sqlite3 for easy storage.

```
rails new -d sqlite3 ror-example
```

> We are making this codebase available on [github as a public repository](https://github.com/Bowery/rails-example) so you can get rolling with rails and Bowery without setting up ruby or rubygems on your local machine.

That is enough for your most basic of rails apps, and now we can setup this app using Bowery. I clicked `new app` and searched for "Ruby 1.9.3 with Rails 4.1.6, Sqlite3" and selected that image. This image is based on Ubuntu 14.04 LTS with a handful of goodies installed, including MongoDB and MySQL for database support.

Here's how I setup the actual app:

* App name: My Rails App
* App image: Ruby 1.9.3 with Rails 4.1.6, Sqlite3
* Remote command: bundle install && rails server
* Remote directory: /home/ubuntu/app
* Local directory: /path/to/my/local/repo

![My Rails App Info](http://bowery-blog.s3.amazonaws.com/desktop/rails/app_settings.png "Example Rails app configuration")

When provisioning is done, you'll see your app with an IP address underneath. For my example (which no longer works of course!):

![My Rails App](http://bowery-blog.s3.amazonaws.com/desktop/rails/provisioned.png "Example Rails app display")

Open your browser up to the IP address you see for your app, port 3000. You should be greeted with the welcome view from a rails app.

![Welcome Page](http://bowery-blog.s3.amazonaws.com/desktop/rails/rails_view.png "Example Rails welcome page")

When you click `About your application's environment` you'll see all the related tools and goodies for your app.

![Welcome Page with Environment](http://bowery-blog.s3.amazonaws.com/desktop/rails/rails_view_env.png "Example Rails welcome page with environment settings")

At this point, you are free to make changes, your app came with Sqlite3 support so you also have access to a database. If you have rails installed locally, you can use `rails generate` to get started with your new rails codebase. If not, you are free to start crafting your controllers, helpers and views as you see fit.

Every time you save a file, Bowery detects it and updates the server on AWS, and then runs `bundle install && rails server` so you get everything refreshed in real time. This also means that because we added `bundle install` to our server command, you can make changes to your `Gemfile` and any new gems get installed automatically.

Stay tuned for more articles on how to make your own custom images, run commands on your server to install additional libraries and tools as you need, and support other languages or frameworks.
