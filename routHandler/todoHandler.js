const express =require('express')
const mongoose =require('mongoose')
const todoSchema = require('../todoSchema/todoSchema')
const router =express.Router()

const Todo = new mongoose.model('Todo',todoSchema)

// create a data 
 router.post('/', (req,res)=>{
    const newTodo = new Todo(req.body)
     newTodo.save((err)=>{
        if(err){
            res.status(5000).json({error: 'there is a server error happen'})
        }else{
            res.status(200).json({
                message:'a data crete success'
            })
        }
    })
}) 
// create many data
router.post('/all', async (req,res)=>{
    await Todo.insertMany(req.body, (err)=>{
        if(err){
            res.status(5000).json({error: 'there is a server error happen'})
        }else{
            res.status(200).json({
                message:'many data crete success'
            })
        }
    })
})

// get all data or filtering get data
/* router.get('/',async (req,res)=>{
await Todo.find({status:"active"},(err,data)=>{
    if(err){
        res.status(5000).json({error: 'there is a server error happen'})
    }else{
        res.status(200).json({
            data,
            message:'many data crete success'
        })
    }
})
})
 */
// get data by method chaining
router.get('/', (req,res)=>{
     Todo.find({status:'active'}).select({
        _id:0,
        __v:0,
        description:0
    }).limit(3).exec((err,data)=>{
        if(err){
            res.status(5000).json({
                error: 'there is a server error happen'
            })
        }else{
            res.status(200).json({
                result:data,
                message:'many data show success'
            })
        }
    })
})
// get data by specific id 
/*  router.get('/:id', async (req, res)=>{
 try{
    const data = await Todo.find({_id:req.params.id})
        res.status(200).json({
        result:data,
        message:'a specific data show success'
    })
 }catch(err){
        res.status(5000).json({
            error: 'there is a server error happen'
        })
    }        
}) */
  

// update a specific data by id
/* router.put('/:id', async (req,res)=>{
    await Todo.updateOne({_id:req.params.id},{$set:{
        status:'inactive',
        title:'edit my title',
    },},(err)=>{
        if(err){
            res.status(5000).json({
                error:'there is a server error'
            })
        }else{
            res.status(200).json({
                message:'a data update success'
            })
        }
    })
})
 */
/ // if our require update data need to show in response so do that using options
router.put('/:id',async (req,res)=>{
    const result = await Todo.findByIdAndUpdate({_id:req.params.id},{$set:{
        status:'active',
        title:'edited by id'
    },},{new:true,useFindAndModify:false},(err)=>{
        if(err){
            res.status(5000).json({
                error:'there is a server error'
            })
        }else{
            res.status(200).json({
                message:'a data update success'
            })
        }
    })
})

// delete a single data
router.delete('/:id', async (req,res)=>{
    await Todo.deleteOne({_id:req.params.id},(err)=>{
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

//delete many data 
router.delete('/', async (req,res)=>{
    await Todo.deleteMany({status:'inactive'},(err)=>{
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

/* ------------------------------using instance method------------------------------------ */
//custom instance method
//making a router for active for that disable get('/:id') 
router.get('/active',async (req,res)=>{
    const todo = new Todo()
    const data =await todo.findActive()
    res.status(200).json({data,})
})

//making another router for getting title  for that disable get('/:id') 
router.get('/title', async (req,res)=>{
    const todo =new Todo()
    const data = await todo.findTitle()
    res.status(200).json({data})
})

// doing callback function noe async await
router.get('/titleCallback', (req,res)=>{
    const todo =new Todo()
          todo.findTitleCallback((err,data)=>{
              res.status(200).json({data})
          })

})

/* ------------------using static method---------------------------------------- */

// making a statice method router for search js

router.get('/js', async (req,res)=>{
    const data =await Todo.findByJs()
    res.status(200).json({data})

})
module.exports =router


























