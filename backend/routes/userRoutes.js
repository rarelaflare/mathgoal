const express = require('express')
const { get } = require('express/lib/response')
const router = express.Router()
const { registerUser, loginUser, getMe} = require('../controllers/userController') 


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router