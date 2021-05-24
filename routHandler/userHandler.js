const express = require('express')
const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema =require('../todoSchema/userSchema')
const router =express.Router()
const User = new mongoose.model('User',userSchema)


// create an user with signup
router.post('/signup', async (req,res)=>{
    try{
        const hashPassword= await bcrypt.hash(req.body.password,10)

        const newUser = new User({
            name:req.body.name,
            userName:req.body.userName,
            password:hashPassword
        })
        await newUser.save()
        res.status(200).json({
            message:'an user  crete successful'
        })
    }catch{
        res.status(500).json({error: 'signup failed'})
    }
  

}) 

router.post('/login', async (req,res)=>{
    const user = await User.find({userName:req.body.userName})
    if(user && user.length >0){
        const isValidUserPass= bcrypt.compare(req.body.password, user[0].password)
        if(isValidUserPass){
             const token=jwt.sign({
                 userName:user[0].userName,
                 userId: user[0]._id
             },process.env.JWT_SECRET,{
                expiresIn:'3 days'
             })
             res.status(200).json({
                 "access_token":token,
                 "message":"login success"
             })
        }else{
            res.status(401).json({error: 'authentication failed'})
        }

    }else{
        res.status(401).json({error: 'authentication failed'})
    }
})
module.exports = router
