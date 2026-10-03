import axios from 'axios';
export const createBookingController=async()=>{
    let res= await axios.post("http://localhost:5000/api/booking/create-booking")
    return res.data.data
}