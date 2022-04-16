// require express
const express = require('express')
const colors = require('colors')
// require dotenv 
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
//const fs = require('fs')

connectDB()

const app = express()
app.disable("x-powered-by");

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))


console.log("The Marathon!..." );
