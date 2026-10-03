const {getController,getSingleController,deleteEventController,createEventController}=require('../controllers/event.controller');
const express= require('express');
const router=express.Router();
router.post("/create-event",createEventController);
router.get("/get-event",getController);
router.get("/get-single-event/:id",getSingleController);
router.delete("/delete-event/:id",deleteEventController);
module.exports=router;