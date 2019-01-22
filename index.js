const express = require('express')
 const hbs = require("hbs");
 const bodyParser = require("body-parser");
const app = express()

app.use(require('./routes/index'))

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));





app.use(require('./routes/index'))
app.listen(3000, () =>{
    console.log("I am listining")
})
