var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var os = require('os')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/healthcheck', indexRouter);

var templog = "";

//////// this is in home app /////////
app.get("/detail", (req, res) => {
  templog = `home /detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});

app.get("/:lang/detail", (req, res) => {
  templog = `req.params : ${req.params.lang} home /detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});
//////// this is in home app /////////

//////// this is in watch app /////////
app.get("/watch", (req, res) => {
  templog = `watch host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});

app.get("/watch/detail", (req, res) => {
  templog = `/watch/detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});

app.get("/:lang/watch/detail", (req, res) => {
  templog = `req.params : ${req.params.lang} watch/detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});
//////// this is in watch app /////////

//////// this is in privilege app /////////
app.get("/privilege", (req, res) => {
  templog = `privilege host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});

app.get("/privilege/detail", (req, res) => {
  templog = `/privilege/detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});

app.get("/:lang/privilege/detail", (req, res) => {
  templog = `req.params : ${req.params.lang} privilege/detail host: ${os.hostname()}`
  console.log(templog);
  res.send(templog);
});
//////// this is in privilege app /////////

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;