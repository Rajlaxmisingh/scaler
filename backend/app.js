const express= require("express");
const app=express(); 
const custRoute=require("./routes/customerRoutes");
require("./connection/connection");
app.use(express.json());
app.use("/api/v1",custRoute);



const PORT = process.env.PORT || 1000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});