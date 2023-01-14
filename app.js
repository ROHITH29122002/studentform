const express = require("express");
const app = express();
const cors = require("cors")
const path=require("path")
require("./db/connect.js")
require("dotenv").config()
const Student = require("./models/register")


const port = process.env.port || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.get("/students",(req,res)=>{
    Student.find((err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

app.post("/student",async (req,res)=>{ 
    try {
        const registeredStudent = new Student({
            name : req.body.name,
            email : req.body.email,
            reg : req.body.reg,
            img : req.body.img,
            sex : req.body.sex,
            html : req.body.html,
            css : req.body.css,
            Js : req.body.Js
        })
        const registered = await registeredStudent.save();
        res.status(201).send("Success");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}) 


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})