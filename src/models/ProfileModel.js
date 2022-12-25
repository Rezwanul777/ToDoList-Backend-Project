const mongoose=require("mongoose")

const DataSchema=mongoose.Schema({
   firstName:{type:String},
   lastName:{type:String},
   emailAddress:{type:String},
   mobileNumber:{type:String},
   city:{type:String},
   userName:{type:String},
   password:{type:String},
   //gender:{type:String},
},{versionKey:false});

const ProfileModel=mongoose.model("profiles",DataSchema);

module.exports=ProfileModel;