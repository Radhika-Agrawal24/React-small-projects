const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try {
        let res=await mongoose.connect(process.env.MONGO_URL);
        if(res){
            console.log("mongoo connected");
            
        }
    } catch (error) {
        console.log("error in mongo db",error);
        
    }
}
module.exports=connectDB;