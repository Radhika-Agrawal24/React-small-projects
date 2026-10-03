const mongoose=require('mongoose');

const eventModel=new mongoose.Schema({
   eventname:{
        type: String,
        required:true
    },
    phoneNumber:{
        type:String,
        
    },
  
    eventCapacity:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    }
})
    module.exports=mongoose.model("Event",eventModel);