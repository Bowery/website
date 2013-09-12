# CLI

## Installation
Once you've registered [online](http://bowerygroup.com) you can install the command line interface using NPM:

```
$ (sudo) npm install bowery -g
```

or you can install Bowery and it's dependencies in one go

```
$ curl https://download.bowery.io/latest
```

This is really convenient for setting up and running Bowery on any computer.


## Getting Started
### Connect
Unlike most development environments, Bowery demands an internet connection. To get started, simply connect to Bowery.

```
$ bowery connect
```

If this is your first time, Bowery will ask you to login, and provide the key you received when registering. You can change this key later.

### Create A New Application

First generate your application. This will register your application with Bowery and provide a base set of files.

```
$ bowery create APP_NAME
> Creating new application
> Registering application with Bowery
> Opening new app at https://APP_NAME.ACCOUNT_NAME.bowery.io
```
Very promptly, your browser will open up to your new application, hosted at the domain listed above.

---

## Development

Bowery "branches" retain the same structure as git branches, but are also accessible online. When you connect to Bowery, you'll get a friendly reminder of the application and branch you're working on. It's HIGHLY recommended you don't work on the master branch. To change branches:

```
$ bowery connect
> Hey Steve, you're currently working on APP_NAME, developing on the MASTER branch.
$ bowery branch NEW_FEATURE
> Opening new branch at https://NEW_FEATURE.APP_NAME.ACCOUNT_NAME.bowery.io
```

This URL is accessible to exclusively you. If you're working in a team environment, they will have access if they are currently logged into Bowery.

When you're ready to merge to master

```
$ bowery merge BRANCH_NAME
> Landing BRANCH_NAME onto MASTER
> Opening production app at https://APP_NAME.ACCOUNT_NAME.bowery.io
```