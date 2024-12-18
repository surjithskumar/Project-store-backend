const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerConfig = require('../middleware/multerMiddleware')

// register
router.post('/register', userController.register)

// login
router.post('/login', userController.login)

// add-project
//router specific middleware
router.post('/add-project', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProjects)

module.exports = router