const express = require('express');
var http = require('http');
var jsxCompile = require('express-jsx');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//Routes
var index = require('./components/app.js');


//App
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(jsxCompile(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser());

app.get('/', function(res,req, next){
	res.send(index);
	next();
});

//Error Handler

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('We are on port' + app.get('port'));
});