const TodoModel = require("../models/TodoModel");


// create Controller
exports.CreateToDo=(req,res)=>{
  // let reqBody=req.body;
   let  todoSubject=req.body['todoSubject']
   let  todoDescription=req.body['todoDescription']
   let userName=req.headers['username']
   let todoStatus="New"
   let todoCreateDate=Date.now();
   let todoUpdateDate=Date.now();
   let postBody={
   userName:userName,
   todoSubject:todoSubject,
   todoDescription:todoDescription,
   todoStatus:todoStatus,
   todoCreateDate:todoCreateDate,
   todoUpdateDate:todoUpdateDate
   }
   TodoModel.create(postBody,(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

exports.SelectToDo=(req,res)=>{
   let userName=req.headers['username']
 
   TodoModel.find({userName:userName},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

exports.UpdateToDo=(req,res)=>{
   let reqBody=req.body;
   let todoSubject=reqBody['todoSubject'];
   let todoDescription=reqBody['todoDescription']
   let todoUpdateDate=Date.now();

   let _id=reqBody['_id']

   let postBody={
   todoSubject:todoSubject,
   todoDescription:todoDescription,
   todoUpdateDate:todoUpdateDate
   }

   TodoModel.updateOne({_id:_id},{$set:postBody},{upsert:true},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}

exports.UpdateStatus=(req,res)=>{
   let reqBody=req.body;
   let todoStatus=reqBody['todoStatus']
   let _id=reqBody['_id']
   let todoUpdateDate=Date.now();

   let postBody={
   todoStatus:todoStatus,
   todoUpdateDate:todoUpdateDate
   }

   TodoModel.updateOne({_id:_id},{$set:postBody},{upsert:true},(err,data)=>{
      if(err){
         res.status(400).json({status:"Failed",data:err})
      }else{
         res.status(200).json({status:"Success",data:data})
      }
   })
}