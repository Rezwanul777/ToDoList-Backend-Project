const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');

exports.CreateProfile=(req,res)=>{
   let reqBody=req.body;
   ProfileModel.create(reqBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

exports.UserLogin=(req,res)=>{
   let userName=req.body['userName']
   let password=req.body['password']
   ProfileModel.find({userName:userName,password:password},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         if(data.length>0){
            let Payload={
               exp: Math.floor(Date.now() / 1000) + (60 * 60),
               data:data
            }
            let token=jwt.sign(Payload,'SecretKey123456')
            res.status(200).json({status:"Success",token:token,data:data})
         }else{
            res.status(401).json({status:"UnAuthorized"})
         }
      }
   })
}