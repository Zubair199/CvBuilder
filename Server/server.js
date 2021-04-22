const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const cors = require('cors')
require('dotenv').config()
const colors = require('colors')
// import routes
const authRoutes = require('./routes/auth')
const resumeRoutes = require('./routes/resume')

 //app
const app = express()

// db

const connection = mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useCreateIndex:true,useUnifiedTopology: true
}).then(()=>{
  console.log('DataBase Connected Succesfully '.green)
})

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(expressValidator());
app.use(cors())
// app.use(expressValidator())


// routes
app.use('/api',authRoutes)
app.use('/api/resume',resumeRoutes)

const port = 8088

app.listen(port,()=>{
  console.log(`Server is running on Port ${port}`.red)
})