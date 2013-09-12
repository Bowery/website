
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

/**
 * @param {string} name
 * @return {boolean}
 */
function validName (name) {
  return !!name
}

/**
 * @param {string} email
 * @return {boolean}
 */
function validEmail (email) {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}

/**
 * @param {string} password
 * @return {boolean}
 */
function validPassword (password) {
  return !!password
}

/**
 * @param {string} card Credit card number
 * @return {boolean}
 */
function validCard (card) {
  return !isNaN(parseInt(card, 10)) // TODO (thebyrd) real validation
}

/**
 * @param {string} cvv
 * @return {boolean}
 */
function validCVV (cvv) {
  return cvv.length == 3 && !isNaN(parseInt(cvv, 10))
}

/**
 * @param {string} month
 * @param {string} year
 * @return {boolean}
 */
function validExpiration (month, year) {

}

/**
 * @param {object} body
 * @return {boolean}
 */
function validBody (body) {
  return validCVV(body.cvv) && validCard(body.card) && validPassword(body.password) && validEmail(body.email) && validName(body.name)
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
