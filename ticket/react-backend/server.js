const express=require('express');
const app= express();
const connectDB=require('./src/database/db');
const eventRoute=require('./src/routes/event.route');
const bookingRoute=require('./src/routes/booking.route');
const cors=require('cors');
app.use(cors());

connectDB();
app.use("/api/event",eventRoute);
app.use("/api/booking",bookingRoute);


app.use(express.json());
app.listen(5000,()=>console.log('Server running on port 5000'));