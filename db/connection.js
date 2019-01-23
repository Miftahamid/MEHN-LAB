const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes");
mongoose.connect('mongodb://localhost/passport', { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;

