process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var config       = require('./config/config.js');
var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var routes       = require('./routes/index');
var users        = require('./routes/users');
//var redis        = require("redis");
//var client       = redis.createClient();
var app          = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.listen(config.port, function(){

    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function(){
        console.log("Successfully connected to MongoDB whyirun!");
    });
 
    // REDIS
    // if you'd like to select database 3, instead of 0 (default), call 
    // client.select(3, function() { /* ... */ }); 

    // client.on("error", function (err) {
    //     console.log("Error " + err);
    // });

    // client.on("ready", function (err) {
    //     if (err) { return console.error(err); }
    //     else {
    //         console.log("Redis is ready.");
    //     }
    // });
            
});



module.exports = app;



console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
