---
layout: docs
category: docs
title: Continuous Integration
---

## Overview

A really powerful feature of Bowery is that it the environment you develop in can also be used during your CI workflow, as well as deployment. This can be accomplished using the Export feature. 

## CircleCI

[CircleCI](https://circleci.com/) provides support for Docker, allowing you to pick an image which you can run tests against. Here's a sample `circle.yml` file which downloads your environment as a tar, loads it into docker, and executes your tests. For more information on CirceCI configuration, [check here](https://circleci.com/docs/configuration).

~~~
machine:
  services:
    - docker

dependencies:
  pre:
    - curl -F -o http://kenmare.io/tar/ENV_ID | docker load

test:
  ovverride:
    - docker run imagename make test
~~~
