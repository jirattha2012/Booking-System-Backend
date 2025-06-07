const express = require('express')
const router = express.Router()

const  { authenticate } = require('../middlewares/auth')
const {
    getCampingList,
    getCampingById,
    createCamping,
    updateCamping,
    deleteCamping
} = require('../controllers/campingController')



// Get camping
router.get('/camping', getCampingList)

// Get camping by id
router.get('/camping/:id', getCampingById)

// Create camping
router.post('/camping', authenticate, createCamping)

// Update camping
router.put('/camping/:id', updateCamping)

// Delete camping
router.delete('/camping/:id', deleteCamping)



module.exports = router