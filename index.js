const express = require('express')
const mongoose =require('mongoose')
const todoHandler =require('./routHandler/todoHandler')


//app initialization
const app =express()
//using middleware
app.use(express.json())

//database connection with mongoose
mongoose.connect("mongodb://localhost/todos",{// mongodb connection string
    useNewUrlParser: true ,useUnifiedTopology: true
})
.then(()=>console.log('connection successfull'))
.catch((err)=>console.log(err))

//declare route
app.use('/todo',todoHandler)

// default error handler
function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }else{
        res.status(500).json({error:err})
    }
}

//port listen
app.listen(4000,()=>{
    console.log('this app is running on port 4000')
})