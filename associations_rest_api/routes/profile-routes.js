const express=require('express');
const apiRouter=express.Router();

const db=require('../models');


apiRouter.post('/new',(req,res)=>{
 db.Profile.create({
    name:req.body.name, 
    UserId:req.body.UserId
 }).then(newProfile=>res.send(newProfile));
});

apiRouter.get('/all',(req,res)=>{
    db.Profile.findAll().then(allProfile=>res.send(allProfile));
})


module.exports=apiRouter;