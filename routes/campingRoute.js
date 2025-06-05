const express = require('express')
const router = express.Router()

const {
    getCampingList,
    getCampingById,
    createCamping,
    updateCamping,
    deleteCamping
} = require('../controllers/campingController')

const  { authenticate } = require('../middlewares/auth')


// Get camping
router.get('/camping', authenticate, getCampingList)

// Get camping by id
router.get('/camping/:id', getCampingById)

// Create camping
router.post('/camping', createCamping)

// Update camping
router.put('/camping/:id', updateCamping)

// Delete camping
router.delete('/camping/:id', deleteCamping)



module.exports = router