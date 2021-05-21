 const express =require('express')
 const mongoose =require('mongoose')

 const todoSchema =mongoose.Schema({
     title:{
         type:String,
         required:true,
     },
     description:String,
     status:{
         type:String,
         enum:['active','inactive']
         
     },
     date:{
         type:Date,
         default:Date.now()
     }
 })

module.exports =todoSchema




















/* const express = require('express')
const mongoose = require('mongoose')

//making a schema for todo operation

const todoSchema =mongoose.Schema({
        title:{
            type: String,required:true,
        },
        
        description:String,
        status:{
            type:String,
            enum:['active','inactive'],
        },
        date:{
            type:Date,
            default:Date.now(),
        },
}) 

module.exports = todoSchema */