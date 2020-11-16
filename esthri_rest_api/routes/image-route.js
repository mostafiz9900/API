
const express = require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
    db.core_images.findAll({
       
    }).then(allImage=>res.send(allImage));
});

module.exports=apiRouter;