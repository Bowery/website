---
layout: post
title:  "Moving from Node.js to Go at Bowery"
img: /static/Bowery_Gopher.gif
date:   2015-01-28 11:00:00
categories: posts
tags:
- tech
- productivity
---

In looking back on the past year, the biggest difference we made in our tech stack was moving from Node.js to Go. Our co-founder, [Steve Kaliski](https://github.com/sjkaliski), made the switch from [Node.js to Go at Poptip](http://thenewstack.io/from-node-js-to-go-why-one-startup-made-the-switch/), but he didn’t learn his lesson there. After building the first iteration of Bowery in Node.js, we made the switch to Go in February 2014 and it’s helped us speed up development and deployment.

Since then, our entire team have become dedicated Gophers. We’ve enjoyed using Go for its clear cut standards and simpler workflow. To give you a peek into our Gopher hole, here's 5 reasons we love working with Go.  

**Easy to write cross-platform code** 

One of the biggest reasons we switched to Go was because of how simple it is to compile code for different systems.

At Bowery, we're building an app to help you and your team manage your development environments, and we need to efficiently support all operating systems -- Linux, Windows and OSX. In Go, you can define different files for different operating systems that implement functionality depending on the operating system. A good example came up when our teammate Larz was building [Prompt](https://github.com/Bowery/prompt), a library for reading user input from the command line. Larz wanted to create a Go package that would implement a cross platform line-editing prompt. This was simple in Go: by creating different files for each OS, the Go compiler would build the file depending on the operating system. 

Compiling code for other systems is also simple, all you have to do is set an environment variable and you suddenly have a Windows binary that you built on a Linux system.

**Faster deployment**

Go is a compiled language so distributing applications for use on multiple platforms is just easier. For us, this is important for deployment and testing, but also is an asset for our end users. With Go, build servers that run tests could easily just move on to production servers when they are ready. Go does not need any system dependencies, making it really simple to distribute. When it comes time to distribute out command line tools or other applications, our users don’t need to worry about having Java, RVM or NPM installed to run Bowery. We like this post by [Jeremy Saenz](https://github.com/codegangsta), who discusses why he moved development of all his [CLI tools to Go](http://blog.codegangsta.io/blog/2013/07/21/creating-cli-applications-in-go/). 


**Concurrency primitives** 

When switching to Go we realized the Node.js event loop wasn’t everything. Node.js doesn’t provide many concurrency primitives. The only thing running concurrently are I/O routines, timers, etc. You can’t communicate across those routines so it’s challenging to build responsive systems on Node.js. With Go, you can run anything concurrently and it provides channels to signal routines to do something, or send values across them to share data. Go also provides low level concurrency primitives like [mutexes](http://golang.org/pkg/sync/#Mutex), [wait groups](http://golang.org/pkg/sync/#WaitGroup), etc. which you could probably find on NPM; but we find channels to be the deciding factor when dealing with concurrency and parallelization.

**Integrated testing framework** 

With Node.js we had our choice of testing frameworks, but some worked better for front end, like Jasmine, and others were better for the backend, like Mocha. There are also other options like JSUnit and PhantomJS, and if you look on [StackOverflow](http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd/680713#680713) there are dozens of other frameworks suggested by users. In some worlds, choice is a good thing, but with Go, we liked the standardization of the testing framework. With Go, all the testing packages are built-in. If you need to write a new test suite, all you have to do is add the `_test.go` file to the the same package as the software you are testing and it will run each time you execute `go test`

You can learn more about [writing tests with Go here](http://golang.org/pkg/testing/). Need to test HTTP services? Go also provides that [with the `httptest` package](http://golang.org/pkg/net/http/httptest/).

**Standard library** 

We love how you can write most software using only Go’s standard library. With Node.js, we almost always had to include an external library; which increased deployment time and increased the potential instability that comes with using third party software. Being able to use just the standard library has enabled us to write code faster and safer.

**Developer workflow tools are more powerful** 

With Node.js there's no real standardized workflow other than using NPM for packaging and script control. Other than that, the tooling is built by the community which is great but there's so many choices that the end result is everyone doing things differently. A great example of workflow standardization in Go is the workspaces layout. You give up a lot of development freedom because you have to follow the [workspaces](https://golang.org/doc/code.html#Workspaces) layout but it provides a lot of structure: you can keep all your Go source code and dependencies in one place. Within your workspace you have three root directories: `src` which holds source code for packages, `pkg` which holds the compiled packages, and `bin` which contains executable commands. It’s a best practice to keep all of your source code and dependencies in a single workspace, making it standard across everyone’s machine. The predictability is ideal when working on a team. We can go on anyone's machine to help and know for a fact our code is going to be in `$GOPATH/src/github.com/Bowery` rather than something like `$HOME/some/path/to/Bowery`. Similarly, `gofmt` formats everyone’s code the same way. It's a huge relief that the superficial issues such as code organization and differences in code style just don’t matter in Go. You can focus on fixing your problem and everything else is taken care of.

There’s a ton of other reasons to like Go, and we’re seeing more companies adopt it internally to power large, distributed applications. But overall, the Go team has discovered that developers can be more productive if you create standards and a set paradigm and others agree. For example, at [MongoDB](http://blog.mongodb.org/post/51643994762/go-agent-go), the management applications team loves using Go for the “sensible, uniform development experience”. At [Soundcloud](https://developers.soundcloud.com/blog/go-at-soundcloud), they loved Go’s strict formatting rules and “only one way to do things” philosophy. This means you spend less time in code review arguing about style and formatting and more time trying to solve your root problem. 

If you’re just getting started with Go and want to learn more, here are some resources to check out. 

* Read the official [Golang blog](http://blog.golang.org/) for updates to the language and advice from the core team 
* Read the official [learning documents](http://golang.org/doc/#learning) the core team has provided
* We like the blog [Going Go Programming](http://www.goinggo.net/), written by Bill Kennedy of Ardan Studios for tips and tutorials 
* [Go by Example](https://gobyexample.com/) has a bunch of examples for different tasks in Go
* [GopherAcademy](http://blog.gopheracademy.com/) has useful posts on Go best practices 
* Brian McCallister has a great post on the [Go workspace and overall developer environment](http://skife.org/golang/2013/03/24/go_dev_env.html)  
* For more on Go code organization, read Jared Carroll’s post on the [Pivotal Labs blog](http://pivotallabs.com/next-steps-in-go-code-organization/)

To get started with your first Go project, set up your new environment to share with your team on [Bowery](http://bowery.io/start/). 



