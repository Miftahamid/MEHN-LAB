 
const User = require("../models/User");
const Recipe = require("../models/Recipe");
// const bcrypt = require("bcrypt-nodejs");
//this is for the passport 
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//this is to find all
User.find({}).remove(() => {
  Recipe.find({}).remove(() => {
    let bugs = User.create({
      email: "bugsbunny@gmail.com",
      password: createPassword("bugsbunny")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        }),
        Recipe.create({
          content: "That's all, folks!",
          author: user._id
        }).then(recipe => {
          user.recipes.push(tweet);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
      email: "daffyduck@gmail.com",
      password: createPassword("daffyduck")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(tweet => {
          user.recipe.push(recipe);
        }),
        Recipe.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(tweet => {
          user.recipes.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      email: "elmerfudd@gmail.com",
      password: createPassword("elmerfudd")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        }),

        Recipe.create({
          content: "Kiww da wabbit!",
          author: user._id
        }).then(tweet => {
          user.recipes.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});
