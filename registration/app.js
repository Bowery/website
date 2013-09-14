
/**
 * Module dependencies.
 */

var express = require('express')
var flash = require('connect-flash')
var fs = require('fs')
var http = require('http')
var path = require('path')
var crypto = require('crypto')

var app = express()
var db = require('monk')('jmoney:java$cript@paulo.mongohq.com:10028/bowery-registration')
var Store = require('connect-redis')(express)

var Logger = require('log')
var log = new Logger('info', fs.createWriteStream(Date.now() + '.log'))
var hipchat = (new require('hipchat')('348b9ece60d9bbb28ed67f1b700d3f')).Rooms

// all environments
app.set('views', __dirname + '/views')
app.set('view engine', 'hjs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.cookieParser('We like Bond more than Bowery'))
app.use(express.session({
  secret: 'something actually secret',
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

// Helpers
function errorHandler (error) {
  log.error(error)
  hipchat.message('Errors', 'Registration', error, {
    color: 'red',
    notify: true
  }, function (err, res) {
    if (err) log.error(err)
  })
}

function hash (password, salt) {
  return crypto
        .createHmac('sha256', salt)
        .update(password)
        .digest('hex')
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
    var salt = require('node-uuid').v1()
    var user = {
      name: req.body.name,
      email: req.body.email,
      salt: salt,
      password: hash(req.body.password, salt),
      stripeToken: req.body.stripeToken
    }

    db.get('users')
      .insert(user)
      .success(function () {
        res.redirect('/thanks!')
      })
      .error(errorHandler)
  } else {
    req.flash('message', 'Missing Required Field.')
    res.redirect('/')
  }
})

var port = 3001
app.listen(port)
log.info('Starting on port ' + port)
