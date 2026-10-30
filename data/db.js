const mongoose = require("mongoose")
require("dotenv").config();
const connectDB = async()=>{
     await mongoose.connect(process.env.MONGO_URL)
};


connectDB()
.then(()=>console.log("DB connedted.."))
.catch((err)=>console.error(err))

module.exports=connectDB