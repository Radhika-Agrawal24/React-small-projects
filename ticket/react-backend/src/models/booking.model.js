const mongoose=require('mongoose')
const bookingSchema=new mongoose.Schema({

    seatNumber:{
        type:Number,
        required:true
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event"
    },
    name:{
        type:String,
        required:true,
        ref:"Event"
    },



})
module.exports=mongoose.model("Booking",bookingSchema)