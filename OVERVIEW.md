# Introducing Bowery
_The Next Generation of Web Development_

## Philosophy
When building a product, your tools should speak the same language you do. For example, a web framework should know what it means to send an email to a user. You shouldn't have to care about SMTP Servers or managing API Keys for some seperate service. You should just `bowery.email(address, body)`. The framework should manage rate throttling and putting the job in the background so you aren't blocking requests.

## Core
Instead of building a web framework from scratch, we've just written middleware for [express](http://expressjs.com). You add the middleware to your applicaiton with

```
app.use(require('bowery'))
```

In your handler callback you'll have access to bowery.

```
app.get('/home', function (bowery, req, res, next) {
  // use bowery to handle the request
})
```

## Database
Bowery comes with a datastore layer that express is lacking.

### Schemas
In a `/schemas` directory you can add schemas with the form

```
exports.User = {
 name: String,
 age: Number,
 friends: [User]
}
```

Values that are a single element array indicate a set of the type given as the only element. `friends: [User]` is an array of User objects.

The supported types are the built in javascript types & schemas defined by the user in the schemas directory.

_Note: We don't yet support required fields or defaults, but we will in the near future._

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

### Search
The built in Bowery Database is simple key value store, so for more complex queries we suggest using the search service.

You can search records by calling.

```
bowery.search({
  name: 'Bob B'
})
```

There's no reason to manually index records. Bowery knows when you have search calls in your code an will manually index the relevant schemas. Bowery knows which schema you're indending to search based on what fields you pass it. In the above example it will search any schema with a name attribute. If you want to scope a search to a specific schema you can also use

```
bowery.search('user', {name: 'Bob B'}) // searches for users with a name similiar to Bob B
```

### Cache
Bowery automatically moves db records between a shared cache, a per machine cache, & an in memory cache based on how the data is accessed. It can manage cache invalidation for models because data is only being changed inside of the bowery application.

However, if you want to manually store data in the cache you can use

```
bowery.cache(key, value)
```
where the key is a string and the value can be a string or set of strings.

## Queue
Some tasks are best done in a delayed in the background.

```
bowery.queue(function (bowery) {
  // do something in the background
})
```

_Note: We're still working on supporting cron jobs._




