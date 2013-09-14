
/**
 * Module dependencies.
 */

var express = require('express')
var flash = require('connect-flash')
var http = require('http')
var path = require('path')

var app = express()
var db = require('monk')('localhost/bowerySignupDev')
var Store = require('connect-redis')(express)
var hipchat = (new require('hipchat')('348b9ece60d9bbb28ed67f1b700d3f')).Rooms

// all environments
app.set('views', __dirname + '/views')
app.set('view engine', 'hjs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.cookieParser('some secret that goes here and is long'))
app.use(express.session({
  secret: 'kljhsdflkjhasdf sadlkjh asdlkfjh salkjdfh',
  store: new Store()
}))
app.use(flash())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' == app.get('env'))
  app.use(express.errorHandler())

// Validation
function validBody (body) {
  return body.name && body.email && body.password && body.stripeToken
}

// Error handling
function errorHandler (error) {
  console.error('ERROR:', error)
  hipchat.message('Errors', 'Registration', error, {
    color: 'red',
    notify: true
  }, function (err, res) {
    if (err) console.error(err)
  })
}

// Handlers
app.get('/', function (req, res) {
  res.render('index', {message: req.flash('message')})
})

app.get('/thanks!', function (req, res) {
  res.render('thanks')
})

app.post('/signup', function (req, res) {
  if (validBody(req.body)) {
    db.get('users').insert(req.body).success(function () {
      res.redirect('/thanks!')
    })
  } else {
    req.flash('message', 'Missing Required Field.')
    res.redirect('/')
  }
})

app.listen(3000)
