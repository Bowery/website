---
layout: post
title:  "Productivity Ruby Gems"
date:   2014-08-05 13:00:54
categories: posts
tags: 
- productivity 
- ruby on rails
---


### 1. Zeus
Zeus is a gem that drastically decreases the time it takes Rails commands to run. Depending on the size of the program, this could make a substantial improvement on productivity. The super quick run time also gives you instant feedback when you run tests. It is meant to work outside of bundler, though, so make sure to keep it outside of your Gemfile.

- [Demo](http://railscasts.com/episodes/412-fast-rails-commands)
- [Github](https://github.com/burke/zeus)

### 2. Passenger “Phusion Passenger makes deployment of Rails applications a breeze.”
Passenger provides a place to host your applications for both development and production environments. It works really well if you are working on multiple applications at a time and need an environment other than localhost.

- [Demo](http://railscasts.com/episodes/122-passenger-in-development)

### 3. Gritter “This Ruby on Rails gem allows you to easily add Growl-like notifications to your application.”
Gritter is a quick way to pretty-up your flash notifications. It comes with a few different types of default notices to suit your needs.

- [Demo](https://github.com/RobinBrouwer/gritter)

![Gritter](https://d262ilb51hltx0.cloudfront.net/max/1600/1*sNYKhIettYSlpBHfF2fPmA.png)

### 4. Faker
Faker is a gem that populates your database with fake data. This one is great for viewing how your application would look if it was in widespread use. It supports quite a number of data types, including names, addresses and even Bitcoins, rendering the data in a realistic format. Just define how many of each data type you would like, and Faker does the rest for you.

Here is an example of Faker in use:

![Faker](https://d262ilb51hltx0.cloudfront.net/max/1970/1*qE_g8mGxC3yMTsUX4lVkHw.png)

As you probably noticed, it generates realistic names and addresses.

- [Demo](http://railscasts.com/episodes/126-populating-a-database)
- [Github](https://github.com/stympy/faker)
