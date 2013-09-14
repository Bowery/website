# Introducing Bowery
_Welcome to the Future of Web Development._

## Philosophy
Web development is terrible—it's filled with convoluted abstrations that have little to do with building a product. Today we care about users, but most of our time is spent worrying about server and database management. 

When writing a Bowery application, you just write code and the rest takes care of itself—there isn't even a local development environment. Common services that developers set up for each application (database, caching, email, search, CDN, etc.) are already built into Bowery. Implementation details and performance optimizations are made behind the scenes so that you can focus all of your energy on the product.

## CLI

### Installation

Once you've [registered online](http://bowery.io) you can install the command line interface using NPM:

```
$ (sudo) npm install bowery -g
```

or you can install Bowery and it's dependencies in one go.

```
$ curl https://download.bowery.io/latest
```

This is really convenient for setting up and running Bowery on any computer.

### Connect

Unlike most development environments, Bowery demands an internet connection. To get started, simply connect to Bowery.

```
$ bowery connect
```

If you're connecting for the first time, Bowery will ask you to login and provide the key you received when registering. You can change this key later using the email and password you provided during registration.

### Git Workflow

Bowery "branches" retain the same structure as git branches, but are also accessible online. When you connect to Bowery, you'll get a friendly reminder of the application and branch you're working on. It's **highly** recommended you don't work on the master branch. To change branches:

```
$ bowery connect
> Hey Steve, you're currently working on APP_NAME, developing on the MASTER branch.
$ bowery branch NEW_FEATURE
> Opening new branch at https://NEW_FEATURE.APP_NAME.ACCOUNT_NAME.bowery.io
```

This URL is only accessible by you. If you're working in a team environment, they will have access if they are currently logged into Bowery.

When you're ready to merge to master:

```
$ bowery merge BRANCH_NAME
> Landing BRANCH_NAME onto MASTER
> Opening production app at https://APP_NAME.ACCOUNT_NAME.bowery.io
```

## Core

Instead of building a web framework from scratch, we've just written middleware for [express](http://expressjs.com). You add the middleware to your application with:

```
app.use(require('bowery'))
```

In your handler callback, you'll have access to Bowery.

```
app.get('/home', function (bowery, req, res, next) {
  // use bowery to handle the request
})
```

## Database

BoweryDB is more of a data management application then a database. It analyses access paterns to cache commonly used data and knows when you make updates in your code to make sure the cache is never stale. All that matters from the developers' point of view is the code they use to interact with it.

### Schemas

In a `/schemas` directory you can add schemas:

```
exports.User = {
 name: String,
 age: Number,
 friends: [User]
}
```

Values that are a single element array indicate a set of the type given as the only element. `friends: [User]` is an array of User objects. The supported types are the built-in javascript types & schemas defined by the user in the schemas directory.

### Queries

You can access the database driver in an express route handler.

```
app.get('/user/:id', function (bowery, req, res, next) {
  bowery.db.user(req.params.id) // gets the user with the id from the path
  .then(function (user) {
    res.render('user/show', {user: user})
  })
  .fail(handleError)
})
```

You can also insert or update an object by using:

```
bowery.db.user(id, {
 name: 'Bob Bowery',
 age: 33
})
```


## Search

BoweryDB is a simple key-value store, so for more complex queries we suggest using the search service.

You can search documents by calling:

```
bowery.search({
  name: 'Bob B'
})
```

There's no reason to manually index documents. Bowery knows when you have search requests in your code and will manually index the relevant schemas. Bowery knows which schema you're intending to search based on what fields you pass it. In the above example, it will search any schema with a `name` attribute. If you want to scope a search to a specific schema, you can also use:

```
// searches for users with a name similiar to Bob B
bowery.search('user', {name: 'Bob B'}) 
```

If you want to search in a domain other then a schema, you can manually index your own search domains.

```
bowery.index('domainName', {username: 'Bob', dogsName: 'Rosco'})
```

## Cache

BoweryDB automatically moves db documents between a shared cache, a per machine cache, and an in-memory cache based on how the data is accessed. It can manage cache invalidation for models because data is only being changed inside of the Bowery application.

However, if you want to manually store data in the cache you can use:

```
bowery.cache(key, value)
```
where the key is a string and the value can be a string or set of strings.

## Queue

Some tasks are best done in the background.

```
bowery.queue(function (bowery) {
  // do something in the background
})
```

You can also run delayed jobs.

```
bowery.queue(handler).delay(5000) // delay time is in ms
```

Cron jobs can be scheduled.

```
bowery.queue(handler).every(3600).startAt(Date.now())
```

## Email

Bowery has a built-in email service and will manage email provider rate limits.

```
bowery.email(to, from, HTMLBody, TextBody)
```

## Static Assets

Almost every web application has to handle and serve static assets. Bowery overrides the default express static middleware so that whatever folder you mount with will be served from a special static file server and put behind a CDN in production:

```
app.use(express.static('path/to/folder'))
```

Stylesheets and scripts will also be gzipped & minified in production.

### Image Uploading
Handling images is normally a terrible experience. Bowery makes uploading and serving images a breeze.

```
app.post('/upload', function (bowery, req, res) {
  bowery.cdn.upload('imageName', req.files.logo)
  .then(function () {
    res.send("upload successful")
  })
  .fail(function () {
    res.send("upload failed")
  })
})
```

### Rendering

In your templates you will have access to a `cdn` variable. If you're using Hogan templates, rendering static assets might look something like:

```
<img src="{{ cdn['path/to/image.jpg'] }}">
```

The rendered html will look something like:

```
<img src="//cdn.bowery.io/appName/path/to/image.jpg">
```

### Resizing

If you would like to render an image at a specific size, you can just add an `s` parameter to the end of the path. For a 50px by 50px image:

```
<img src="{{ images['imageName'] }}?s=50x50">
```

## Production

### Use a Custom Domain

Configure your DNS to point to `APP_NAME.bowery.io` and add the domain to your application in the terminal.

```
$ bowery domains:add www.foo.com
```

You can also remove the domain from your application.

```
$ bowery domains:remove www.foo.com
```
