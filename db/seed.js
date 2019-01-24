const User = require("../models/User");
const Recipe = require("../models/Recipe");
const bcrypt = require("bcrypt-nodejs");
const createPassword = password =>
//this is for the passport 
bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 
 