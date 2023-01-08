const mongoose = require("mongoose");
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
  })
.then(()=>{
    console.log("Connection Successful ...");
})
.catch((e)=>{
    console.log(`Connection Failed with error ${e}`);
})