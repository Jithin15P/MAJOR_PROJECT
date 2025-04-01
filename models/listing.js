const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        set:(v)=>v===""?"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww":v
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }

})

const Listing =mongoose.model("Listing",listingSchema);
module.exports=Listing;