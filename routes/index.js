 const express = require ('express')

 const router = express.Router()

router.use('/',require('./application'))


 router.all('*',(res,req) => {
     res.status(400).send()
 })

 module.exports = router
