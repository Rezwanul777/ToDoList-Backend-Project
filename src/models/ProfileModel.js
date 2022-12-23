const mongoose=require("mongoose")

const DataShema=mongoose.Schema({
   firstName:{type:String},
   lastName:{type:String},
   emailAddress:{type:String},
   mobileNumber:{type:String},
   city:{type:String},
   userName:{type:String},
   password:{type:String},
},{versionKey:false});

const ProfileModel=mongoose.model("Profile",DataShema);

module.exports=ProfileModel;