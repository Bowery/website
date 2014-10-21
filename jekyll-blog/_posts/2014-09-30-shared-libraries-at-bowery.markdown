---
layout: post
title:  "Shared Libraries"
date:   2014-09-30 16:00:54
categories: posts
---

In the last eight months the language of choice at Bowery has transitioned from Node.js to Golang. And with that transition came the opportunity to think about how we structure our services as well as define our workflow.

Taking inspiration from Frederick Brooks in The Mythical Man Month, we sought to define “distinct roles [though] a little extreme…to contribute to design success.” Each Bowery service (user authentication, environment management, remote agent, etc) is unique, but amongst each service is a shared set of utilities.

By maintaining a separate repository of shared tools we’ve achieved:

1. Less duplicate code.
2. Clean, abstracted API’s.
3. Drastically less errors in production.

The first two are fairly obvious: shared code means less redundancy, and small packages often lead to clean and well tested interfaces.

The third is less straight forward, and I’d like to delve into further.

Each service we maintain is managed primarily by a single engineer. Yet, each service communicates with each other. This leads to an inevitable communication problem: for every inter-service communication, there must be an inter-engineer communication. And as services increase, the required communication increases exponentially!

So how do shared libraries squash this issue and reduce errors in production?

By writing packages for schemas, functionality for inter-service communication, database clients, etc. any and all communication as well as possibility for error from that communication, has been reduced to a single repository. It also opens up a platform for discussing the architecture and inner workings of a system amongst it’s engineers.

Let me give you an example.

Bowery has an environment manager we call “Kenmare” and a user/auth manager we call “Broome.” Yes, everything is named after a street.

The code for how each service talks to the other as well as what they send is defined in our shared packages. This means that if I work on Kenmare, I need not know the inner workings of Broome, I can simply call “broome.GetDeveloper(id)” in Kenmare and expect an object of type “schemas.Developer”, both defined in our shared library.

What happens when we update these tools?

We have a set of tools (though any CI system would do) that run the tests for any other repository that depends on this library. If an error is thrown, we can see what changes need to be made before we deploy. This keeps the entire system in sync. Having a unifying point (that isn’t a point of failure) across a distributed system is where the magic is at.

tl;dr
Shared libraries reduce duplicate code (dry as a desert) and reduce the exponential nature of engineer-engineer communication. They are particularly helpful in a large, service oriented system.
