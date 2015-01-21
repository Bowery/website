---
layout: docs
category: docs
title: Collaboration
---

## .bowery

After you launch a Bowery environment for the first time, you'll find a new file, `.bowery` located in the root of your application directory. It looks something like this:

~~~
DO NOT DELETE THIS FILE. It is a key component of Bowery (http://bowery.io/start).
For questions, email hello@bowery.io and include your id (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) in the email.
~~~

The unique identifier links your application to your environment. As a result, whenever your co-workers or teammates download or sync your repostiory/project, they'll be using the same environment as you.

To ensure your team's environment is in sync, make sure to commit this file to your repository.

## Merging

As you and your team work with Bowery, you will likely make changes to your environment, whether that's installing new software, updating to the latest version of a depencency, or changing some configurations. Bowery merges changes to your environment, layering them on top of each other, giving preference to more recent changes.

Consider this example where developer A and B are working on the same project. If B updates the version of Golang, then the next time A launches the environment, they will receive that update. If A and B both update Golang, but happen to pick different versions, whoever saves last sets the version for that environment.
