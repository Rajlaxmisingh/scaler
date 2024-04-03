const router=require("express").Router();
const customerModel=require("../models/customerModel");
const nodemailer = require("nodemailer");
const graph = require('../graph'); 
const rates = {
    "A": 10,
    "B": 20,
    "C": 30,
    "D": 40,
    "E": 50
};
  
function getFixedRateForCabType(cabType) {
    
    
    return rates[cabType] || 0; // Return 0 if cabType is not found
}

router.use(cors(
    {
        origin: ["https://cabook.vercel.app/"],
        methods: ["POST","GET"],
        credentials: true
    }
))

router.get('/',(req,res) =>{
    res.json("hello");
})
//POST REQUEST 

router.post("/add", async (req, res) => {
    try {
        const { email, source, destination, cabType } = req.body;
        const { distances } = graph.dijkstra(source);
        
        const shortestTime = distances[destination];
        const fixedRate = getFixedRateForCabType(cabType);
        const Price = shortestTime * fixedRate;
        
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + shortestTime * 60000);
        
        const existingRides = await customerModel.find({ cabType, startTime: { $lt: endTime }, endTime: { $gt: startTime } });
        
        if (existingRides.length > 0) {
            return res.status(400).json({ message: "Overlap detected. Cannot create ride." });
        }
        
        console.log("Shortest Time:", shortestTime);
        console.log("Fixed Rate:", fixedRate);
        console.log("Price:", Price);
        
        const newCustomerData = {
            email,
            source,
            destination,
            cabType,
            Price,
            startTime,
            endTime
        };
    
        const newCustomer = new customerModel(newCustomerData);
        await newCustomer.save();
       
        // Send confirmation email
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
            subject: 'Ride Confirmation',
            text: 'Backend done!'
        };
        
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