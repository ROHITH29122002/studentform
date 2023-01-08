const mongoose = require("mongoose");
require("dotenv").config()

mongoose.connect("mongodb+srv://rohith:9963@cluster0.b9oudqk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection Successful ...");
})
.catch((e)=>{
    console.log(`Connection Failed with error ${e}`);
})