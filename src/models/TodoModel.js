const mongoose=require("mongoose")

const DataSchema=mongoose.Schema({
  
   userName:{type:String},
   todoSubject:{type:String},
   todoDescription:{type:String},
   todoStatus:{type:String},
   todoCreateDate:{type:Date},
   todoUpdateDate:{type:Date}
   
},{versionKey:false});

const TodoModel=mongoose.model("list",DataSchema);

module.exports=TodoModel;