var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var index = require('./routes/index');
var page2 = require('./routes/page2');

var app = express();

'use strict';


request.get({ //used to get the github apis (request package - is in dependencies)
    url: 'https://api.github.com/users/angular/repos?per_page=100&page=1',
    json: true,
    headers: {'User-Agent': 'request'}
}, (err, res, data1) => {


    if (err) return console.log('Error:', err);

if (res.statusCode !== 200) return console.log('Status:', res.statusCode);

request.get({
    url: 'https://api.github.com/users/angular/repos?per_page=100&page=2',
    json: true,
    headers: {'User-Agent': 'request'}
}, (err, res, data2) => {

    if (err) return console.log('Error:', err);

if (res.statusCode !== 200) return console.log('Status:', res.statusCode);

var data = data1.concat(data2); //used to merge the 2 arrays of objects


data.sort(function(a,b) { //sorted by date the array, because objects are randomly ordered.
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
});

app.locals.passed = data; //initialization to use variable "passed" in view/index.ejs


});

});





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/page2', page2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
