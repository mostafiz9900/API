const express=require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.post('/new',(req,res)=>{
    db.User.create({
        username:req.body.username
    }).then(newUser=> res.send(newUser));
});

apiRouter.get('/all',(req,res)=>{
    db.User.findAll({
       include:[db.Profile, db.Post]
    }).then(allUser=> res.send(allUser));
});

apiRouter.get('/find/:id',(req,res)=>{
    db.User.findAll({
        where:{id:req.params.id},
       include:[db.Profile, db.Post]
    }).then(allUser=> res.send(allUser));
});


module.exports=apiRouter;