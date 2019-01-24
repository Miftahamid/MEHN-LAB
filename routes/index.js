// routers for the recipe 
// When the user client goes to the the routes it will preform the action 
const express = require('express')
const router = express.Router()
const mongo = require ('mongodb')
const assert = require ('assert')
// const recipeController = require('../controllers/Recipe')

 
router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/recipe', require('./recipe'));

module.exports = router;