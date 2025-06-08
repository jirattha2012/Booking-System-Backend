const express = require('express')
const router = express.Router()

const { authenticate } = require('../middlewares/auth')
const { createFile } = require('../controllers/uploadFileController')


router.post('/uploadFile', authenticate, createFile)


module.exports = router