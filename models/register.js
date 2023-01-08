const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    reg : {
        type : String,
        required : true,
        unique : true
    },
    img : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },
    html : {
        type : String
    },
    css : {
        type : String
    },
    Js : {
        type : String
    }
})

const Student = new mongoose.model("Student",studentSchema);

module.exports = Student