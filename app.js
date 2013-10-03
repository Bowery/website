var express = require('express')
var http = require('http')
var path = require('path')
var request = require('request')

var app = express()

// all environments
app.set('port', process.env.PORT || 5000)
app.set('views', __dirname + '/views')
app.set('view engine', 'hjs')
app.use(express.favicon(__dirname + '/public/favicon.ico'))
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.cookieParser('some secret that goes here and is long'))
app.use(app.router)
app.use(require('less-middleware')({ src: __dirname + '/public' }))
app.use(express.static(path.join(__dirname, 'public')))

// TODO(steve): Replace this with propellant.
var API_ENDPOINT = 'http://api.bowery.io'

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler())
  API_ENDPOINT = 'http://bowery2.apiary.io'
}

/**
 * Static pages.
 */
['/', '/docs', '/pricing', '/signup'].forEach(function (v) {
  app.get(v, function (req, res) {
    res.render(v == '/' ? 'index' : v.slice(1))
  })
})

/**
 * Create new developer. Requires a name, email, and password.
 * If any parameters are missing, error returned. On successful
 * creation, developer & organization objects returned.
 */
app.post('/developers', function (req, res) {
  var body = req.body
  if (!body.name || !body.email || !body.password) res.end('Missing fields')
  
  request({
    url: API_ENDPOINT + req.url,
    json: body,
    method: 'POST'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Update a developer. Requires token.
 */
app.put('/developers/:token', function (req, res) {
  var body = req.body

  request({
    url: API_ENDPOINT + req.url,
    json: body,
    method: 'PUT'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Create new developer token.
 */
app.post('/developers/token', function (req, res) {
  var body = req.body
  if (!body.license) res.end('Missing license')

  request({
    url: API_ENDPOINT + req.url,
    json: body,
    method: 'POST',
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Get active developer.
 */
app.get('/me', function (req, res) {
  var token = req.query.token
  if (!token) res.end('Missing token')

  request({
    url: API_ENDPOINT + req.url,
    method: 'GET'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Check if organization name exists. Returns boolean.
 */
app.post('/organizations/:name/exists', function (req, res) {
  request({
    url: API_ENDPOINT + req.url,
    method: 'POST'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Update an organization.
 */
app.put('/organizations/:id', function (req, res) {
  var body = req.body
  if (!body.token) res.end('Missing fields')

  request({
    url: API_ENDPOINT + req.url,
    json: body,
    method: 'POST'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Adds a developer to an organization. If the developer does not exist it
 * create the developer and generate a sign up link.
 */
app.post('/organizations/developer', function (req, res) {
  var body = req.body
  if (!body.token || !body.organizationId || !body.email) res.end('Missing fields')

  request({
    url: API_ENDPOINT + req.url,
    json: body,
    method: 'POST'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

/**
 * Get sign up page, pre-filled with known developer information.
 */
app.get('/organizations/invite/:token', function (req, res) {
  request({
    url: API_ENDPOINT + req.url,
    method: 'GET'
  }, function (err, response, body) {
    if (err) res.end('Error')
    res.json(body)
  })
})

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})
