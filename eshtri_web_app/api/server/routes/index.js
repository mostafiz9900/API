const express = require('express');
const db=require('../db');
const router=express.Router();

router.get('/', async (req,res,next)=>{
    res.json({base_url:'A base URL is, basically, the consistent part of your web address.'});
});
router.get('/get/core_about', async (req,res,next)=>{
    try{
        let results= await db.core_about();
        res.json({
            results:results,
            msg:'sfslfslf'
        });
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get('/get/core_backend_config', async (req,res,next)=>{
    try{
        let results= await db.core_backend_config();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get('/get/core_images', async (req,res,next)=>{
    try{
        let results= await db.core_images();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
   // core_modules
   router.get('/get/core_modules', async (req,res,next)=>{
    try{
        let results= await db.core_modules();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
  // core_paypal_config
  router.get('/get/core_paypal_config', async (req,res,next)=>{
    try{
        let results= await db.core_paypal_config();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
   // mk_shops list
   router.get('/get/shops/limit/:limit/offset/:offset', async (req,res,next)=>{
    try{        
        console.log(req.url);
        // const limit = 20;
        // res.setHeader('content-type', 'application/json');
        var limit=req.params.limit;
        var offset=req.params.offset;
        let results= await db.mk_shops(limit, offset );        
        res.json(results);           
       
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});




module.exports = router;