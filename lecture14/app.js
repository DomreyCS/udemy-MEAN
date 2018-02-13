/*
- Getting querystring data in controllers
- Adding middleware for parsing forms
- Getting form data in controllers
*/

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser"); //for reading form data

var routes = require("./api/routes");

app.set('port', process.env.PORT);

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

//middleware placed between the static path middleware and our routes middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Magic happens on port:" + port);
});