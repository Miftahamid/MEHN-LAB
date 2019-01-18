const express = require('express')
// Create a new instance of express 
const app = express()
// Creating an instance of mongoose 

//Schema is connected to the mongoose 
const Schema = mongoose.Schema

const listSchema = new Schema({
    name : String,
    items : 
})
const listModel = mongoose.model("List", listSchema)
//Insted of puting this here we put it in a folder called fouter 
app.get('/home', (res,req) => {
    listModel.find({}).then((results) => {
        console.log(results)
    })
    res.send('hello form /home')
})

app.listen(3000, () =>{
    console.log("I am listining")
})
