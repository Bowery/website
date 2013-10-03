var express = require('express')
var http = require('http')
var path = require('path')

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
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/docs', function (req, res) {
  res.render('docs')
})

app.get('/pricing', function (req, res) {
  res.render('pricing')
})

app.get('/signup', function (req, res) {
  res.render('signup')
})

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});