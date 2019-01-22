const express = require('express')
<<<<<<< HEAD
// const hbs = require("hbs")
const app = express()
=======
 
const app = express()

app.use(require('./routes/index'))

>>>>>>> b4f4ae84655c522b4ad5b3ad124cf1ff43e52c89

app.use(require('./routes/index'))
app.listen(3000, () =>{
    console.log("I am listining")
})
