const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const recipe = new Schema({
  content: String,
  ingrdients: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

   
  

 

module.exports = {
  Recipe: mongoose.model("Recipe", recipe),
  // Comment: mongoose.model("Comment", Comment)
};
