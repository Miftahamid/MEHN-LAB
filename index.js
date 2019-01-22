const express = require('express')
// const hbs = require("hbs")
const app = express()

app.use(require('./routes/index'))
app.listen(3000, () =>{
    console.log("I am listining")
})
