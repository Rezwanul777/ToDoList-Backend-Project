const express=require('express');
const  ProfileController  = require('../controllers/ProfileController');
const router=express.Router()

// Create profile route
router.post('/CreateProfile',ProfileController.CreateProfile)
module.exports=router