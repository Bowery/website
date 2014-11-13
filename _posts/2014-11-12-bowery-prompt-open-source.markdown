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

As an example, here is a version that implements some of the features of the [Unix read utility](http://ss64.com/bash/read.html) using prompt.




	package main

	import (
	  "flag"
	  "github.com/Bowery/prompt"
	  "os"
	)

	var (
	  prefix string
	  silent bool
	)

	func init() {
	  flag.StringVar(&prefix, "p", "", "Display a prompt prefix.")
	  flag.BoolVar(&silent, "s", false, "Silent mode, characters are not printed.")
	}

	func main() {
	  flag.Parse()
	  var (
	    out string
	    err error
	  )

	  if silent {
	    out, err = prompt.Password(prefix)
	  } else {
	    out, err = prompt.Basic(prefix, false)
	  }

	  if err != nil {
	    os.Stderr.Write([]byte(err.Error()))
	    os.Exit(1)
	  }

	  os.Stdout.Write([]byte(out + "\n"))
	}



The repository is available on [Github](https://github.com/Bowery/prompt) and has [full Godoc documentation](https://godoc.org/github.com/Bowery/prompt). And special thanks to Bowery team member [Larz Conwell](https://github.com/larzconwell) for all his help on this!

Interested in Bowery? Learn more here at [bowery.io](http://bowery.io).
