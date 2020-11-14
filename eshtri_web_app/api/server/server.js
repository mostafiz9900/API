const express = require('express');
// import express from "express";
const apiRoutes=require('./routes');
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
// app.use(bodyparser.json());

app.use(express.json());

app.use('/api/eshtri',apiRoutes);

// create server
app.listen( port, err=>{
    if(err){
        return console.log("Error", err);
    }
    console.log(`Server runnin on port port : ${port}`);
});

