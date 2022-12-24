const express=require('express');
const  ProfileController  = require('../controllers/ProfileController');
const authverifyMiddleware=require('../middleware/authverifyMiddleware')

const router=express.Router()

// Create profile route
router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UserLogin',ProfileController.UserLogin)

// auth middleware
router.get('/SelectProfile',authverifyMiddleware,ProfileController.SelectProfile)
module.exports=router