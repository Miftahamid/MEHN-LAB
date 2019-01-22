const User = require("../models/User");
const { Recipe } = require("../models/Recipe");

module.exports = {
  show: (req, res) => {
    console.log('user show')
    res.render('index', { page: "show" })
  },
  new: (req, res) => {
    res.render("index");
  },
  create: (req, res) => {
    console.log('user create')
    res.render('index', { page: "create" })
  }
};
