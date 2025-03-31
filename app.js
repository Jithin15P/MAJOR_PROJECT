const express=require("express");
const app=express();
const mongoose=require("mongoose");

let port=3000;

app.listen(port,()=>{
    console.log(`server start to listen to port :${port}`);
})