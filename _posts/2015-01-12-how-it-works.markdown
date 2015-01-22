---
layout: docs
category: docs
title:  How it Works
---

The Bowery Terminal is a new way to manage and distribute your development environments, all the while maintaing your current workflow. Bowery Environments are easily exportable to various formats for easy deployment and integration. The Bowery Terminal reduces the overhead of running and maintaining other environment provisioners. All you have to do is store a unique identifier in your project. Bowery keeps your environment in sync, handles merges, and hosts it for you.

A "Bowery Environment" is maintained in a Docker image. Every time you "launch" an environment, a new container is ran, and the Bowery Terminal establishes and SSH session directly into that container. As you and your team members alter that image, Bowery handles merges, ensuring that the image is up to date for all users. Your environment is tied directly to a `.bowery` file located at the root of your application directory.
