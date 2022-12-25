const express=require('express');
const  ProfileController  = require('../controllers/ProfileController');
const TodoListController=require('../controllers/TodoListController')
const authverifyMiddleware=require('../middleware/authverifyMiddleware')

const router=express.Router()

// Create profile route
router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UserLogin',ProfileController.UserLogin)

// auth middleware
router.get('/SelectProfile',authverifyMiddleware,ProfileController.SelectProfile)

// update router
router.put('/UpdateProfile',authverifyMiddleware,ProfileController.UpdateProfile)

// create Todo route
router.post('/CreateToDo',authverifyMiddleware,TodoListController.CreateToDo)

// Select Todo route

router.get('/SelectToDo',authverifyMiddleware,TodoListController.SelectToDo)

// update todo route

router.post('/UpdateToDo',authverifyMiddleware,TodoListController.UpdateToDo)

//update status
router.post('/UpdateStatus',authverifyMiddleware,TodoListController.UpdateStatus)


module.exports=router