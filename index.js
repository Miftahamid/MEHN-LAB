const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-perser")
const methodOverride = require("method-override")

const app = express()
hbs.registerPartials(__dirname + "/views/partials")
app.use(express.static("public"))


app.listen(4000, () => {console.log("app listening on port 4000")})