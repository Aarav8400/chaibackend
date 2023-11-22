const express=require('express')
require ('dotenv').config()
const app=express()

const port=4000

app.get("/",(req,res)=>{
    res.send("this is my backend")
})

app.get("/login",(req,res)=>{
    res.send("<h1>welcome aarav</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log("server is listening on port"+ port);
})