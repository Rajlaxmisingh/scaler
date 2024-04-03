const express= require("express");
const app=express(); 
const custRoute=require("./routes/customerRoutes");
require("./connection/connection");
app.use(express.json());
app.use("/api/v1",custRoute);

// app.use(async (req, res, next) => {
//     const { cabType, startTime, endTime } = req.body;
//     const existingRides = await customerModel.find({ cabType, endTime: { $gt: startTime } });
//     const overlappingRide = existingRides.find(ride => ride.startTime <= endTime);

   
//     if (overlappingRide) {
//         console.log("Alert: Overlapping ride times detected!");
//         return res.status(400).json({ message: "Overlap detected. Cannot create ride." });
//     }

//     next();
// });

app.use(cors(
    {
        origin: ["https://scaler-gamma.vercel.app/"],
        methods: ["POST","GET"],
        credentials: true
    }
))

app.get('/',(req,res) =>{
    res.json("hello");
})

app.listen(1000,()=>{
    console.log("SERVER STARTED");
});