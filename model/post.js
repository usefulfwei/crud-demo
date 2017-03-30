/**
 * Created by jwdn on 2017/3/30.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/posts');

var db = mongoose.connection;

db.on('error',function(){
  console.log('error')
})
db.once('open',function(){
  console.log('DB connected !');
})

var postSchema = mongoose.Schema({
  title:String,
  content: String,
  date:Number
})

var Posts = mongoose.model('posts',postSchema);
var post = new Posts({
  title: 'this is a test title',
  content: 'this ia a test content',
  date: +(new Date())
})

Posts.find({},function(err,doc){
  if(err){
    console.log(err);
  }else{
    if(!doc[0]){
      post.save(function(err,doc){
        if(err) console.log('err in saving');
        console.log(doc);
      })
    }
  }
})

module.exports = Posts;