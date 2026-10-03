import axios from 'axios';
    const API_URL="http://localhost:5000/api/event"
 export const createEventController=async()=>{
  let res=await axios.post(`${API_URL}/create-event`)
 }
 export const getController=async()=>{
  let res=await axios.get(`${API_URL}/get-event`)
  return res.data.data
 }
 export const getSingleController=async(id)=>{
  let res=await axios.get(`${API_URL}/get-single-event/${id}`)
  return res.data.data
 }
  export const deleteEventController=async(id)=>{
  let res=await axios.delete(`${API_URL}/delete-event/${id}`)
  return res.data.message
 }
 
  
