---
layout: docs
category: docs
title:  How it Works
---

## How it works

By seamlessly integrating into your existing workflow, the Bowery Terminal reduces the overhead of running and mainting other environment provisioners. Bowery Environments are easily exportable to various formats for easy deployment and integration. The Bowery Terminal reduces the overhead of running and maintaining other environment provisioners. Sharing your environments with a team is as simple as storing a unique identifier in your project. Bowery keeps your environment in sync and handles merges amongst team members. By keeping your team's environments in sync, you reduce the risk of deploying broken code due to versioning issues and you allow your team to code in a replica their production environment. When it's time to go into production, Bowery Environments are easily exportable to various formats for easy deployment and integration.

## Environments

A Bowery Environment is maintained in a Docker image. Every time you "launch" an environment, we run a new container, and the Bowery Terminal establishes and SSH session directly into that container. As you and your team members alter that image, Bowery handles merges, ensuring that the image is up to date for all users. Your environment is tied directly to a `.bowery` file located at the root of your application directory.

## Security

One of the highest priorities at Bowery is the safety and security of your environment and source code. We run a single container per instance on Google Cloud. Google Cloud manages the isolation of these instances. Your terminal sessions take place over SSH directly between your computer and that instance. When you end your session, your environment, as well as source code, is wiped from that instance. Your environments are securely stored using [CoreOS Enterprise Registry (Quay)](https://quay.io/).

If you're interested in hosting Bowery on premise, send us a message to [Hello at Bowery.io](mailto:hello@bowery.io).
