---
layout: post
title:  "Open sourcing Bowery/prompt"
date:   2014-11-12 13:00:54
categories: posts
---

![Imgur](http://i.imgur.com/hC7KHOj.gif)

Making a cross-platform _anything_ is hard. Making a cross-platform command-line tool is especially hard, since you have to wrangle Command Prompt on Windows and various Unix terminals to behave the same way.

With Bowery 2, one of our biggest challenges was making a Windows keyboard behave like a Unix keyboard. When you typed `bowery ssh` on a Windows computer, it would give you ssh access to an Ubuntu machine. How do you emulate arrow key movements so that you can do things like see the previously executed command when pressing the up key?

Enter Bowery/prompt. (Pun intended.) Use it for any cross-platform command line tools you need to build. 

The repository is available on [Github](https://github.com/Bowery/prompt) and has [full Godoc documentation](https://godoc.org/github.com/Bowery/prompt).
