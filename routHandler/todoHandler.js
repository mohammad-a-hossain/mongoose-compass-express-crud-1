const express = require('express')
const mongoose= require('mongoose')
const todoSchema =require('../todoSchema/todoSchema')
const checkLogin = require('../middleware/checklogin')
const router =express.Router()


const Todo = new mongoose.model('Todo',todoSchema)

router.post('/',(req,res)=>{
    const newTodo =new Todo(req.body)
        newTodo.save((err)=>{
           if(err){
           res.status(500).json({error:'there is a sever side error happen !!'})
           }else{
               res.status(200).json({message:'a todo has created successful'})
           }

        })  
})

router.post('/all', async (req,res)=>{
       await Todo.insertMany(req.body,(err)=>{
           if(err){
               res.status(500).json({error:'there is a server error happen!!'})
           }else{
               res.status(200).json({message:'al data created success'})
           }
       })
})

// get all data or filtering get data
/*  router.get('/',async (req,res)=>{
await Todo.find({status:"active"},(err,data)=>{
    if(err){
        res.status(5000).json({error: 'there is a server error happen'})
    }else{
        res.status(200).json({
            data,
            message:'get data success'
        })
    }
})
}) */

// get data by method chaining
 router.get('/', checkLogin, async (req,res)=>{
    await Todo.find({status:"inactive"}).select({
        _id:0,
        __v:0,
    }).limit(5).exec((err,data)=>{
        if(err){
            res.status(5000).json({error: 'there is a server error happen'})
        }else{
            res.status(200).json({
                data,
                message:'get data success'
            })
        }
    })
}) 
// get data by specific id 
router.get('/:id', checkLogin, async (req,res)=>{
    try{
        const data = await Todo.find({_id:req.params.id})
        res.status(200).json({
            result:data,
            message:'specific data get success'
        })

    }catch{
        res.status(5000).json({error: 'there is a server error happen'})
    }
})

// update a specific data by id
router.put('/:id', checkLogin, async (req,res)=>{
    await Todo.updateOne({_id:req.params.id},{$set:{
        status:'inactive',
        title:'this edited second time'
    },},(err)=>{
        if(err){
            res.status(5000).json({error: 'there is a server error happen'})
        }else{
            res.status(200).json({
              
                message:'data update success'
            })
        }

    })
})

//specific item delete
router.delete('/:id', checkLogin,  (req,res)=>{
   Todo.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.status(5000).json({
                error:'there is a server error'
            })
        }else{
            res.status(200).json({
                message:'a data delete success'
            })
        }

    })
})
// all data delete 
router.delete('/',checkLogin,(req,res)=>{
    Todo.deleteMany({title:'learning with sumit shaha'},(err)=>{
        if(err){
            res.status(5000).json({
                error:'there is a server error'
            })
        }else{
            res.status(200).json({
                message:'many data delete success'
            })
        }
    })
})

module.exports = router
