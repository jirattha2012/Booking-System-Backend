const prisma = require('../config/prisma')
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.createFile = async (req, res, next) => {
    try {
        const { file } = req.body
        // console.log('Request File ==> ', req.body.file)

        const uploadResult = await cloudinary.uploader.upload(file, { 
            public_id: Date.now(),      // เป็น Unique
            resource_type: 'auto',
            folder: 'Landmark'
        })

        res.json({ 
            result: uploadResult,
            message: 'Uplode file success!' 
        })
    } catch (error) {
        next(error)
    }
}