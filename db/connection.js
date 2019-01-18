const mongoose = require ('mongoose')
// Connecting the mongoose and mongodb server
mongoose.connect('mongodb://localhost/review')
// is an a sinc 
mongoose.Promise = Promise

module.exports = mongoose;