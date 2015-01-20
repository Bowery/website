---
layout: docs
category: docs
title: Deployment Guide
---

## Deployment with Docker

This is maybe how you could run your code in production and what not:

~~~
$ curl bowery.io/export/m78b9asdf | docker load
$ docker run -i -t m78b9asdf /bin/bash
~~~

## Deployment with Chroot

It's pretty 