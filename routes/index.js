// routers for the recipe 
// When the user client goes to the the routes it will preform the action 
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/Recipe')

router.get('/',recipeController.index)
router.get('/new', recipeController.new)
router.post('/', recipeController.create)
router.get('/:id', recipeController.show)
router.get('/:id/edit', recipeController.edit)
router.put('/:id', recipeController.update)
router.destroy('/:id', recipeController.destroy)

module.exports = router