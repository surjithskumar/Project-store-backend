const express = require('express')
const router=express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

// register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add-project
router.post('/add-project',projectController.addProjects)

module.exports=router