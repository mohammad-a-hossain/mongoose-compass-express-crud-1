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

 /* -------------------instance method ,static and query helper---------------------------------- */

//instance method
todoSchema.methods ={
    findActive : function(){
        return mongoose.model('Todo').find({
            status:'active'
        })
    }
  }
  todoSchema.methods={
      findTitle :function(){
          return mongoose.model('Todo').find({
              title:'edited by id'
          })
      },
      // using call back function not async await
      findTitleCallback:function(cb){
          return mongoose.model('Todo').find({
              status:'inactive'
          },cb)
      }
  }
/* -----------------static method---------------------------------- */

todoSchema.statics ={
    findByJs:function(){
        return this.find({title:/sumit/i})
    }
}
  

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