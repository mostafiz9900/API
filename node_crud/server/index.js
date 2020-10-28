const  express = require('express');
 const bodyParser=require('body-parser');
 const app=express();
 const mysql=require('mysql');
const { response } = require('express');
const { json } = require('body-parser');

//   parse application json
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors());
// create database connection
const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
});

conn.connect((err)=>{
    if(err) throw err
    console.log('My sql connected');
});
 
app.get('/',(req,res)=>{
res.send('This is home page');
});
// create new recod
app.post('/api/create',(req,res)=>{
    
 let data={name:req.body.name, location:req.body.location};
//  let sql="INSERT INTO `users`(`id`, `name`, `location`) VALUES ([value-1],[value-2],[value-3])"
let sql ="INSERT INTO users SET ?";
let query=conn.query(sql,data,(err,result)=>{
if(err) throw err;
res.send(JSON.stringify({status:200,error:null, response:'New Record added successfully'}));
});
});

// show data 
app.get("/api/view",(req,res)=>{
let sql="SELECT * FROM users";
let query=conn.query(sql,(err,result)=>{
if(err) throw err;
res.send(JSON.stringify({status:200,err:null, response: result}));
});
});

// shwo a single data
 app.get("/api/view/:id",(req,res)=>{
let sql="SELECT * FROM users where id=" + req.params.id;
let query=conn.query(sql,(err,result)=>{
 if(err) throw err;
 res.send(JSON.stringify({status:200, err:null, response:result}));
});
 });

//  update data
 
app.put('/api/update',(req,res)=>{
let sql="UPDATE users SET name='"+ req.body.name+"', location='"+req.body.location+"' WHERE id ="+ req.body.id;
let query=conn.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(JSON.stringify({status:200,err:null, response:"Recode update successfully"}));
});
});

//  delete data
app.delete('/api/delete/:id',(req,res)=>{
let sql="DELETE FROM users WHERE id="+ req.params.id+"";
let query=conn.query(sql,(err, result)=>{
if(err) throw err;
res.send(JSON.stringify({status:200, err:null, response:"Delete Data Successfully"}));
});
});

app.listen(8000,()=>{
    console.log('server started on port 8000...');
});
