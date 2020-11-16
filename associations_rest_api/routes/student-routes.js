const express=require('express');
const apiRouter=express.Router();

const db=require('../models');


apiRouter.get('/all',(req,res)=>{
    db.Student.findAll({
        include:[db.Profile]
    }).then(allStudent=> res.send(allStudent));
});

// apiRouter.get('/find/:id',(req,res)=>{
//     db.User.findAll({
//         where:{id:req.params.id},
//        include:[db.Profile, db.Post]
//     }).then(allUser=> res.send(allUser));
// });


module.exports=apiRouter;