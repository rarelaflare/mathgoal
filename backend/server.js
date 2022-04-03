// require express
const express = require('express')
// require dotenv 
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const fs = require('fs')

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))


console.log("The Marathon!..." + fs );
