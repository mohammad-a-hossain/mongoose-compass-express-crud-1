const express = require('express')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const todoHandler =require('./routHandler/todoHandler')
const userHandler = require('./routHandler/userHandler')

const app =express()
dotenv.config()

app.use(express.json())



mongoose.connect('mongodb://localhost/todos',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>console.log('connection success'))
.catch((err)=>console.log(err))

app.use('/todo', todoHandler)
app.use('/user', userHandler)

function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }else{
        res.status(500).json({error:err})
    }
}

app.listen(4000, ()=>{
    console.log('this app is listening on port 4000')
})

































/* const express = require('express')
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
}) */