var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var assert = require('assert');
mongoose.connect("mongodb://localhost/score")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
var url = 'mongodb://localhost/score'

app.get('/', function(req, res, next) {
    res.render('testing.ejs');
  });

  
app.listen("3000",function(){
	console.log("server is connected")
})