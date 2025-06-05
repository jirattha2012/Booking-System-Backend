const express = require('express')
const router = express.Router()

const { authenticate } = require('../middlewares/auth')
const { createProfile } = require('../controllers/profileController')


router.post('/profile', authenticate, createProfile)


module.exports = router