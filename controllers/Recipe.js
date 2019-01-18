const { Recipe, Comment } = require("../models/recipe");
const User = require("../models/User");

module.exports = {
  show: (req, res) => {
      console.log('recipe show')
      res.render('index', { page: "show" })
  },
  new: (req, res) => {
    console.log('recipe new')
    res.render('index', { page: "new" });
  },
  create: (req, res) => {
    console.log('recipe create')
    res.render('index', { page: "create" })
  },
  update: (req, res) => {
    console.log('recipe update')
    res.render('index', { page: "update" })
  }
};
