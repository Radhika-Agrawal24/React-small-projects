import React from 'react'
import {useEffect,useState} from 'react';
import { getController } from '../services/event.service';
const Home = () => {
    const [event, setEvent] = useState([])
    const[booking,setBooking]=useState("")
    const handleboook=async(id)=>{
        try {
            let res=await createBookingController({
                eventId:id,
                name:studentName
            }
 );
 console.log(res.data)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        try{
            const fetchData=async()=>{
                let res=await getController();
                console.log(res);

                setEvent(res.data)
             }
            fetchData();
            }
            catch(error){
                console.log(error)
        }

  },[])
  return (
    <div>
      <h1>Home</h1>
{event&&event.map((item)=>{
    return(
        <div key={item._id}>
            <h1>{item.name}</h1>
            <p>{item.location}</p>
           
            <button onClick={()=>{handleboook(item._id)}}>Book Now</button>
        </div>
    )

}
)}
    </div>
  )
}

export default Home