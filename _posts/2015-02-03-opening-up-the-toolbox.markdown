---
layout: post
title:  "Opening Up the Toolbox: Sharing Our Go Libraries"
date:   2015-01-30 10:00:00
categories: posts
tags:
- tech
- engineering
- open source
---

Just the other day we posted about our transition [from Node.js to Go](/posts/Nodejs-to-Golang-Bowery/), and one of the few things left out was the largest challenge of our shift: there weren't the same quantity of resources available for learning and getting started as there are with Node.js.

Some background: [Bowery](http://bowery.io) is a service for keeping your development environment in sync. It’s a terminal that sits right alongside your text-editor and browser, but unlike your normal terminal, it connects you to an exact replica of your production environment, shared with your team. This makes it easy to get up and running on a project and avoid bugs that comes from discrepancies between your development and production environments.

Our service is comprised of micro-services all written in Go. These services share a common set of libraries (web framework, system tools, etc) making them very easy to build and prototype.

In the process of building Bowery we created a number of Go [libraries](/posts/shared-libraries-at-bowery/) that we just started releasing. These are useful (and sometimes just fun) packages can assist in development but are also nice contained examples of Go code.

### Prompt

[Repository](https://github.com/Bowery/prompt)

Cross-platform line-editing prompting library. A previous version of Bowery was built as command line interface and this is a great tool for reading user input across all operating systems.

### Ignores

[Repository](https://github.com/Bowery/ignores)

Similar functionality to `.gitignore`. Provided a directory and some ignore file, list all files to ignore. We built this so our users can prevent certain files from being synced.

### Errors

[Repository](https://github.com/Bowery/errors)

Various helpers for errors in Go, including stack errors with traces and frames.

### Progress

[Repository](https://github.com/Bowery/progress)

Execute `GET` requests with progress and error channels. Useful for tracking download progress for large files.

### Slack Client

[Repository](https://github.com/Bowery/slack)

A Slack api client for posting messages to public channels. We use it internally to let us know when new users sign up, when they launch environments, etc.

We hope these libraries help you on your way to learning and using Go. When you're ready to get started, set up and share your development environment with [Bowery](http://bowery.io)

For more info on our open source projects, productivity tips, and more, sign up below for our newsletter!
