const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Recipe = new Schema({
  content: String,
  ingrdients: String,
  dairy: String,
  vagitable: String,
  fruits: String,
  spices:Number,
  condiments:String,
  sauces: String,
  baverages:String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = {
  Recipe: mongoose.model("Recipe", Recipe),
  // Comment: mongoose.model("Comment", Comment)
};
