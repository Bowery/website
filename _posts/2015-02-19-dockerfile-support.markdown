---
layout: post
title:  "Announcing Docker-Based Development Environments"
date:   2015-02-19 10:00:00
categories: posts
tags:
- releases
- tech
---

[Bowery version 3.6.0](http://bowery.io/docs/downloads/) includes a deeper integration with Docker: the ability to provision a new, sharable development environment with a Dockerfile.  Now you can have the power of containers without the infrastructure headaches. You don't need to have Docker installed on your machine or run a virtual machine to launch a Docker container with Bowery. All you need is the Bowery app. 

Bowery hosts your environment and helps you share it with others, and we wanted to make it simpler for Docker users to get up and running on Bowery. If you have an existing Docker configuration you'd like to develop with on your Windows or Mac machine, you can launch that with Bowery to create a shareable development environment, without disrupting your existing workflow. We're going to outline how to get started with Bowery by using your Dockerfile. You can learn more about Bowery on [the docs](http://bowery.io/docs/what-is-bowery/). 

### Setup with a Dockefile

Here's a quick step-by-step for how it works. 

1. When you launch the Bowery Terminal, select the directory where your project and Dockerfile are located.
2. Before Bowery launches a new container, it will ask if you would like to use your existing Dockerfile to provision your environment. Click yes, and Bowery will read the Dockerfile in your directory and executes the steps to set up your operating system and dependencies. 
3. Once the instance is launched, navigate to your folder in your Bowery terminal and start coding as usual. 
4. Once you're finished, save your environment. All of the work you've done in your container is saved.
5. Once you’re ready to deploy, all you need to do is export the Bowery environment. We provide [two options](http://bowery.io/docs/deployment/): Export to a Docker image, or a chroot jail. This makes it easy to port to any production system or CI tool you would like to use. 

### What Happens To My Dockerfile? 

Nothing. Your Dockerfile will not be modified when deployed with Bowery. All of your environment's information gets saved in a .bowery file. The Dockerfile is only use it as the base when creating the image the *first* time. Next time you launch your project with Bowery it will use the .bowery file to boot up your environment, which, if you started it with a Dockerfile, will have the same information as your original Dockerfile. 
  
### Why run your Docker containers on Bowery? 

* If you’re on a Mac or Windows, Bowery offers a simpler way for you to run Docker containers without launching a hefty Virtual Machine. 

* Since Bowery runs your containers on a remote machine you're free from the limits of localhost. For example, you can test authenticated with an OAuth API.

## Containers Make it Possible

We’ve seen Docker mature significantly and are excited about the future of containers. We use containers to power Bowery's development environments and we know it would not be where it is today without Docker's expansion of container technology. 

## Learn More 

If you want to learn more, sign up for our Webinar on February 25 to learn more about provisioning your development environments with Bowery and Docker.

<div>
<form class="form">
    {% for f in page.fields %}
      {% for field in f %}
        <input class="field" type="text" placeholder="{{field[1]}}" name="{{field[0]}}">
      {% endfor %}
    {% endfor %}
    <a class="btn" href="https://attendee.gotowebinar.com/register/3411168119429103873">register &rarr;</a>

  </form>
</div>
