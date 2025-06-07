const renderError = require("../utils/renderError")
const prisma = require('../config/prisma')

exports.getCampingList = async (req, res, next) => {
    try {
        const getCampingList = await prisma.landmark.findMany()

        res.json({ result: getCampingList })
    } catch (error) {
        next(error)
    }
}

exports.getCampingById = async (req, res, next) => {
    try {
        const { id } = req.params

        const getCampingById = await prisma.landmark.findFirst({
            where: {
                landmark_id: Number(id)
            }
        })
        
        res.json({ result: getCampingById })
    } catch (error) {
        next(error)
    }
}

exports.createCamping = async (req, res, next) => {
    try {
        const { id } = req.user
        const { title, price, description, category, latitude, longitude } = req.body

        const landmark = await prisma.landmark.create({
            data: {
                // ...req.body,
                title: title,
                price: price,
                description: description,
                category: category,
                latitude: latitude,
                longitude: longitude,
                profile_id: id
            }
        })

        res.json({
            data: landmark,
            message: 'Create camping success'
        })
    } catch (error) {
        next(error)
    }
}

exports.updateCamping = (req, res) => {
    try {
        res.send('Update camping success')
    } catch (error) {
        next(error)
    }
}

exports.deleteCamping = (req, res) => {
    try {
        res.send('Delete camping success')
    } catch (error) {
        next(error)
    }
}