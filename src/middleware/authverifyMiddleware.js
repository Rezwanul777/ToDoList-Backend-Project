const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{

   const Token=req.headers['token-key']
   jwt.verify(Token,'SecretKey123456',(err,decoded)=>{
      if(err){
         res.status(401).json({status:"UnAuthorized"})
      }else{
         // get username from decoded token and add req headers
         let username=decoded['data']['userName']
         req.headers.username=username

         next()
      }
   })
}