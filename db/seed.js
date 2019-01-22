const User = require("../models/User");
const { Recipe } = require("../models/Recipe");

User.find({}).remove(() => {
  Recipe.find({}).remove(() => {
  });
});

User.create({})
