const mongoose = require("../db/connection");
var bcrypt   = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  ingredient: String,
  souce: String
});

 

module.exports = mongoose.model("User", userSchema);
