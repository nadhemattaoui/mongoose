const express = require('express')
const app = express()
const Cors =require('cors')
const Connect=require('./dbConnect');
const Router = require('./userRoutes');
Connect()
app.use(Cors())
app.use(express.json())

app.use('/api',Router)
app.listen(5000,()=>{console.log('server running on port 5000')})




