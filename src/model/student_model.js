const { timeStamp } = require('console');
const mongoose=require('mongoose');
const { type } = require('os');

const Schema=mongoose.Schema
const StudentModel=new Schema({

    name:{
        type:String
    },
    rollNo:{
        type: String
    },
},
{   
        timestamps:true,
        versionKey:false
    
    
})
module.exports=mongoose.model('student',StudentModel)