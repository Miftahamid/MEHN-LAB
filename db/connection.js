const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes");
mongoose.connect('mongodb://localhost/passport', { useNewUrlParser: true });

// this is checking if your server is connected 
// mongoose.connection.once('open', function(){
//     console.log('You are connected to the databese')
// }).on('error', function(error){
//     console.log('Connection err', error)
// })

mongoose.Promise = Promise;
module.exports = mongoose;

