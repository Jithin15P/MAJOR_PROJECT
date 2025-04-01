const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing = require("./models/listing.js");
const path =require("path");

app.set("view engine","ejs");
app.set("Views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));


//index Route
app.get("/listings",async(req,res)=>{
  const allListing= await Listing.find({});
  res.render("listings/index.ejs",{allListing});
});

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//create Route
app.post("/listings",async (req,res)=>{
    const  newlisting= new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings")

})

//Show route
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});



//Sample testing route
// app.get("/testListing",async(req,res)=>{
//     let samplelisting =new Listing({
//     title:"my new villa",
//     description:"by the beach",
//     price:1200,
//     location:"calangote,Goa",
//     country:"india"
//    });
//     await samplelisting.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });




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