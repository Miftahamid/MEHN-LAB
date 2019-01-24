const User = require("../models/User");
const Recipe = require("../models/Recipe");
const bcrypt = require("bcrypt-nodejs");
const createPassword = password =>
//this is for the passport 
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//this is to find all
// User.find({}).remove(() => {
//   Recipe.find({}).remove(() => {
//     let bugs = User.create({
//       email: "bugsbunny@gmail.com",
//       password: createPassword("bugsbunny")
//     }).then(user => {
//       Promise.all([
//         Recipe.create({
//           content: "eh, what's up doc?",
//           author: user._id
//         }).then(recipe => {
//           user.recipes.push(recipe);
//         }),
//         Recipe.create({
//           content: "That's all, folks!",
//           author: user._id
//         }).then(recipe => {
//           user.recipes.push(tweet);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });
//   });
// });


//User.restaurants.remove({});
db.recipe.insert([
  {
    "name": "Cookies Corner",
    "address": {
      "street" : "1970 2nd St NW",
      "zipcode" : 20001
    },
    "yelp": "http://www.yelp.com/biz/cookies-corner-washington"
  }
])
