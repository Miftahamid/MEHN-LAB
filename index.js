const express = require('express')
 
const app = express()

app.use(require('./routes/index'))


app.listen(3000, () =>{
    console.log("I am listining")
})
