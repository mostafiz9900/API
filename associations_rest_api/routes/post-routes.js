const express=require('express');
const apiRouter=express.Router();

const db=require('../models');


apiRouter.post('/new',(req, res)=>{
    db.Post.create({
    text:req.body.text,
    UserId:req.body.UserId
    }).then(newPost=>res.send(newPost));
});

apiRouter.get('/all', (req, res)=>{
    db.Post.findAll().then(allPost=> res.send(allPost));
})

module.exports=apiRouter;