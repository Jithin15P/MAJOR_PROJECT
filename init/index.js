const mongoose=require("mongoose");
const initData= require("./data.js");
const Listing=require("../models/listing.js");


main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(`its showing some error:-${err},debbug it`);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

//new function for initialisation of DB
const initDB =async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised")
}

initDB();
