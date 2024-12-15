const users=require('../Model/userSchema')
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log("inside register function");
    res.status(200).json("Register Request Received") 
    const{username,email,password}=req.body

    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exists.. Please login")
        }else{
            const newUser = await users({
                username,email,password,github:"",linkedin:"",profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        } 
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.login=async(req,res)=>{
    console.log("inside login function");

    const {email,password} = req.body

    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //generate token
            const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret)
            res.status(200).json({existingUser,token})
        }else{
            res.status(408).json("Invalid email/password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}