const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
   
   email: {type:String, required:true},
   source :{type: String ,required: true},
   destination :{type: String ,required: true},
   cabType: {type: String ,required: true},
   Price:{type: Number,required: true},
   startTime:{type: Date,required: true},
   endTime:{type: Date ,required: true},
}); 

module.exports=new mongoose.model("Customers",customerSchema);