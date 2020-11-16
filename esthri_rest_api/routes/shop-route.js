
const express = require('express');
const apiRouter=express.Router();

const db=require('../models');

apiRouter.get('/view',(req,res)=>{
    db.mk_shops.findAll({
   include:[{
        model:db.core_images,
        // attributes: ["img_type"], // only show define attributes
        //   as : 'company'
    }],   
    // isInt: {
    //     msg: "Must be an integer number of pennies"
    //   }
    // offset: 1,
    //  limit: 1,
//   order : [['createdate','DESC']],
//   raw : true // show data raw style
    }).then(allShop=>{
        // res.send("name")
        res.status(200).send(allShop);
    }).catch(error => {
        console.log(error);
        res.status(400).send(error)
      });
});

module.exports=apiRouter;
