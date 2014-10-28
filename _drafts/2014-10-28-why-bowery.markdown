---
layout: post
title:  "Why use Bowery?"
date:   2014-10-28 13:00:54
categories: posts
---

Developers today have a lot of choice in what tools to use across the entire stack. How does Bowery fit in alongside other tools?

### vs. Vagrant and virtual machines
Vagrant is a fantastic open-source tool that configures a virtual machine based on a Vagrantfile written in Ruby. By typing using the `vagrant init` and `vagrant up` commands to build a virtual machine. You can share that virtual machine with others using `vagrant share`, and you can ssh into the virtual machine using `vagrant ssh`. 

Yet Vagrant requires you to use a virtual machine locally to develop. Many modern web applications consist of multiple services, with each service requiring its own server or virtual machine. Running more than 2 or 3 virtual machines will slow your computer to a crawl, making your development process painful. Your development environment is constrained by your local machine—one or two virtual machines might run slowly on a modern laptop, but any older computer won't be able to handle your software (and won't be a good simulation of your production environment, which is hopefully on much more powerful servers.) Plus, Vagrantfiles need to be written in Ruby. Writing them if you're not familiar with Ruby is a pain, even with examples online, and updating them to reflect new versions of software is annoying.

Bowery gives you the replicability of a Vagrantfile without asking you to write one—you enter your commands to set up your server and we'll remember how you set it up so you can share that environment with others. And since Bowery runs the environment on a remote server, you don't have to worry about virtual machines slowing down your computer. 

### vs. web IDEs
Web IDEs are amazing for getting a sandbox environment up and running. You get a virtual private server with a certain amount of RAM, CPU, and storage, and sometimes you can pick what software you'd like installed on that virtual server. The problem? You're limited to a web-based text editor and web-based terminal, and the transition from development to production isn't fully clear. Every engineer learns the ins and outs of a text editor and terminal, and expecting users to conform to a web environment for those critical tools is counterproductive.

Bowery gives you the same ease of setup as a web IDE, without requiring any change to your workflow. 

### vs. Amazon Web Services
AWS is the industry leader in production hosting. You can scale your application and database in just a few clicks, and everyone from Netflix to Pinterest uses them. But AWS isn't built for development. Getting your code onto the server isn't trivial, and navigating the AWS dashboard can be confusing. Plus, sharing an environment with others takes more steps than it should.

Bowery gives you the flexibility of using AWS as your development environment, but automates the process of getting your code onto the server and running build/run steps. Plus, sharing that environment is as easy as sharing an environment id.

### vs. local installations
The most common way to set up a new web app today is to just install the necessary software on your local computer. It's reasonably straightforward, and you can develop offline. The problem is that you'll often run into conflicts with different software, and it's hard to reverse changes you make. Then when you're ready to push your app to production, it will likely be using a different operating system than the one on your local computer, leading to unforeseen bugs even with extensive testing locally.

Bowery allows you to develop on the same hardware you'll be using for production, without needing to install anything locally. Made a mistake? Everything is on a remote machine. Want to try a new technology? Use one of our pre-made stacks to get started with little to no configuration. See the changes you make locally reflected in the browser instantly just as if you were running `localhost`, but never deal with another StackOverflow post on how to install rails/php/python on Mac/Windows/Linux again.