/* const express =require('express')
const router =express.Router()
const mongoose =require('mongoose')
const todoSchema =require('../todoSchema/todoSchema')

//making a Todo modal 
const Todo = new mongoose.model('Todo',todoSchema)// model name must be singular (Todo) */

// get all todo by filtering
/* router.get('/', async (req,res)=>{
    await Todo.find({status:'active'},(err,data)=>{
    if(err){
        res.status(500).json({
            error:'there was a server side error occurred'
        })
    }else{
            res.status(200).json({
                result:data,
            message:'single data get success'
            })
        }
    
})
}) */
//get data by filtering using 'SELECT' 'EXECution' method chaining
/* router.get('/',async (req,res)=>{
    await Todo.find({status:'active'}).select({ //.select and .exec is method chaining
    _id:0,
    _v:0,
    date:0
    }).limit(2).exec((err,data)=>{
        if(err){
            res.status(500).json({
                error:'there was a server side error occurred'
            })
        }else{
                res.status(200).json({
                    result:data,
                message:'single data get success'
                })
            }
        
    })
})
 */

// /* 
// //get a todo by id
// router.get('/:id', async (req,res)=>{
//    await Todo.find({_id:req.params.id},(err,data)=>{
//     if(err){
//         res.status(500).json({
//             error:'there was a server side error occurred'
//         })
//     }else{
//             res.status(200).json({
//                 result:data,
//             message:'a data get successfully founded'
//             })
//         }
//    })
// })

// //creat  a post 
// router.post('/',async (req,res)=>{
//     const newTodo = new Todo(req.body)
//     await newTodo.save((err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'there was a server side error occurred'
//             })
//         }else{
//                 res.status(200).json({
//                 message:'a data has successfully posted'
//                 })
//             }
        
//     })
// })

// //post multiple todo
// router.post('/all', async (req,res)=>{
//     await Todo.insertMany(req.body,(err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'there is server error in inserting data'
//             })
//         }else{
//             res.status(200).json({
//                 message:'many data inserted success'
//             })
//         }
//     })
// })

// //put a todo update one data 
// /*  router.put('/:id', async (req,res)=>{
//      await Todo.updateOne({_id:req.params.id},{$set:{
//          status:'inactive',
//          title:'edited title set'
//      },},(err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'there is server error in inserting data'
//             })
//         }else{
//             res.status(200).json({
//                 message:'data update success'
//             })
//         }
//      })
// })  */

// // if our require update data need to show in response so do that using options
// router.put('/:id', async (req,res)=>{
//   const result=  await Todo.findByIdAndUpdate({_id:req.params.id},{$set:{
//         status:'active',
//         title:'edited title sets'
//     },},{
//         new:true,
//         useFindAndModify:false
//     },(err)=>{
//        if(err){
//            res.status(500).json({
//                error:'there is server error in inserting data'
//            })
//        }else{
//            res.status(200).json({
//                message:'data update success'
//            })
//        }
//     })
//     console.log(result)
// })
 
// // delete a todo
// router.delete('/:id', async (req,res)=>{
//     await Todo.deleteOne({_id:req.params.id},(err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'there is server error in inserting data'
//             })
//         }else{
//             res.status(200).json({
//                 message:'a data has deleted success'
//             })
//         }
//     })
// })

// //delete many data
// router.delete('/',async (req,res)=>{
//     await Todo.deleteMany({status:'inactive'},(err)=>{
//         if(err){
//             res.status(500).json({
//                 error:'there is server error in inserting data'
//             })
//         }else{
//             res.status(200).json({
//                 message:'many  data has deleted success'
//             })
//         }
//     })
// })

// module.exports =router */