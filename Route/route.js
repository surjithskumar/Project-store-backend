const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerConfig = require('../middleware/multerMiddleware')

// register
router.post('/register', userController.register);

// login
router.post('/login', userController.login);

// add-project
//router specific middleware
router.post('/add-project', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProjects);

//getHomeProject
router.get('/home-project',projectController.getHomeProjects);

//getAllProjects
router.get('/all-project',jwtMiddleware,projectController.getAllProjects);

//get user projects
router.get('/user-project',jwtMiddleware,projectController.getUserProjects);

module.exports = router;