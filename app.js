const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing = require("./models/listing.js");


//Sample testing route
app.get("/testListing",async(req,res)=>{
    let samplelisting =new Listing({
    title:"my new villa",
    description:"by the beach",
    price:1200,
    location:"calangote,Goa",
    country:"india"
   });
    await samplelisting.save();
    console.log("sample was saved");
    res.send("successful testing");
});




//Root route
app.get("/",(req,res)=>{
    res.send("hi i am root");
});

//connecting mongoose
main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(`its showing some error:-${err},debbug it`);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

let port=8080;
//Server starting
app.listen(port,()=>{
    console.log(`server start to listen to port :${port}`);
}); 