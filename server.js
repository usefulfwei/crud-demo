/**
 * Created by jwdn on 2017/3/30.
 */
var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var port = require('./config');

var posts = require('./router/posts');

var app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/posts',posts);

// var port = process.env.PORT || 3000;

app.listen(port,function(err){
  if(!err){
    console.log('running at port '+port);
  }
})