var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Posts = require('../model/post');

router.get('/',function(req,res){
  Posts.find({})
      .sort({date:-1})
      .exec((err,posts)=>{
        if(err){
          console.log(err);
          return res.status(500).json({error: 'Could not retrieve posts'});
        }
        res.json(posts);
      })
})

router.get('/:id',function(req,res){
  var id = mongoose.Types.ObjectId(req.params.id);
  Posts.findById({'_id':id})
      .exec((err,post)=>{
        if(err){
          console.log(err);
          return res.status(500).json({error: 'Could not retrieve posts'});
        }
        res.json(post);
      })
})

router.post('/new',function(req,res){
  var post = new Posts({
    title:req.body.title,
    content:req.body.content
  })
  post.save((err,doc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error: 'Could not save post'})
    }
    res.json({
      code:0,
      doc
    })
  })
})
router.post('/new/:id',function(req,res){
  var id = mongoose.Types.ObjectId(req.params.id);
  Posts.findById({'_id':id})
      .exec((err,post)=>{
        if(err){
          console.log(err);
          return res.json({error: 'Could not update post'});
        }
        post.title = req.body.title;
        post.content = req.body.content;
        post.save((err,doc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({error: 'Could not save post'});
          }
          res.json({
            code:0
          })
        })
      })
})

router.delete('/:id',function(req,res){
    var id = mongoose.Types.ObjectId(req.params.id);
    Posts.remove({'_id':id})
        .exec((err,post)=>{
          if(err){
            console.log(err);
            return res.json({error: 'Could not delete post'});
          }
          res.json({
            code:0
          })
        })
})

module.exports = router;