const router=require("express").Router();
const customerModel=require("../models/customerModel");
const nodemailer = require("nodemailer");
const graph = require('../graph'); 

  

//POST REQUEST 

router.post("/add", async (req, res) => {
    try {
        const { email,source, destination ,cabType, startTime, endTime } = req.body;
        const existingRides = await customerModel.find({ cabType, startTime: { $lt: endTime }, endTime: { $gt: startTime } });
        if (existingRides.length > 0) {
            return res.status(400).json({ message: "Overlap detected. Cannot create ride." });
        }

        // console.log(source);
        const { distances } = graph.dijkstra(source);
        // console.log(distances);
        // Find the shortest time to reach the destination
        const shortestTime = distances[destination];
        // endTime=startTime+shortestTime;
        const newCustomer = new customerModel(req.body);
        await newCustomer.save();
        // res.status(200).json({ shortestTime });
       
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rajlaxmisingh456@gmail.com',
              pass: 'vfrp uule nwxs gljm'
            }
          });
          
          let mailOptions = {
            from: 'rajlaxmisingh456@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Ride booked successfully. Confirmation email sent." });
    } 
     catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while adding the ride." });
    }
});


//GET REQUEST 

router.get("/getRides",async(req,res)=>{
    let ride;
    try{
        ride=await customerModel.find();
        res.status(200).json({ride});

    } catch(error){
        console.log(error);
    }
})

//GET REQUEST BY ID

router.get("/getRides/:id",async(req,res)=>{
    let ride;
    const id= req.params.id;
    try{
        ride=await customerModel.findById(id);
        res.status(200).json({ride});

    } catch(error){
        console.log(error);
    }
})

//UPDATE RIDES/PRICES BY ID


router.put("/updateRide/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await customerModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Ride Updated Successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating ride" });
    }
});

module.exports=router;