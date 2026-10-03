const eventModel=require("../models/event.model")
const createEventController=async (req,res) => {
    try {
        let {eventname,phoneNumber,location,eventCapacity,Date}=req.body;
        if(!eventname || !phoneNumber || !location || !eventCapacity || !Date){
            return res.status(400).json({
                message:"all fields are required"
            })
        }
        let event=await eventModel.create({
            eventname,
            phoneNumber,
            location,
            eventCapacity,
            Date
        })
        return res.status(201).json({
            message:"new event created",
            data:event
        })

    } catch (error) {
        return res.status(500).json({
            message:"error in event controller",
            error:error.message
        })
    }
}
const getController = async (req, res) => {
  try {
    const getEvent = await eventModel.find();

    return res.status(200).json({
      message: "all events",
      data: getEvent
    });

  } catch (error) {
    return res.status(500).json({
      message: "error in getevent controller",
      error: error.message
    });
  }
};
const getSingleController=async (req,res)=>{
    try {
       let id= req.params.id
         let getSingleEvent=await eventModel.findById(id);
        return res.status(200).json({
            message:"single event",
            data:getSingleEvent
        })
    }
catch (error) {
         return res.status(500).json({
            message:"error in single getting  event controller",
            error:error.message
        })
    }}
    const deleteEventController=async(req,res)=>{
        try {
          let id = req.params.id
          let deleteEvent=await eventModel.delete(id);
           return res.status(200).json({
            message:"deleted event",})
        } catch (error) {
             return res.status(500).json({
            message:"error in delete event controller",
            error:error.message
        })
    }}
    module.exports={createEventController,getController,getSingleController,deleteEventController}