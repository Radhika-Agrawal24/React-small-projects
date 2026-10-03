const bookingModel=require('../models/booking.model');
const eventModel=require('../models/event.model');
const createBookingController=async (req,res)=>{
    try {
        let {eventId,name}=req.body;
        if( !eventId || !name){
            return res.status(400).json({
                message:"all fields are required"
            })
        }
        let eventCapacity=await eventModel.findById(eventId);
        if( !eventCapacity){
            return res.status(404).json({
                message:"event not found"
            })
        }
        const bookingCount=await bookingModel.countDocuments({eventId});

        if( bookingCount>=eventCapacity.capacity){
            return res.status(400).json({
                message:"event is fully booked"
            })
        }
          const seatNumber = bookingCount + 1;

        let booking=await bookingModel.create({
            seatNumber,
            eventId,
            name
        })
        return res.status(201).json({
            message:"booking created",
            data:booking
        })}
     catch (error) {
        return res.status(500).json({
            message:"error in booking controller",
            error:error.message
        })
    }}
    module.exports={createBookingController}