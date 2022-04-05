// require express
const express = require('express')
// require dotenv 
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
//const fs = require('fs')

const app = express()

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port: ${port}`))


console.log("The Marathon!..." );
