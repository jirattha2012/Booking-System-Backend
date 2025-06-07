const renderError = require('../utils/renderError')
const prisma = require('../config/prisma')


exports.createProfile = async (req, res, next) => {
    try {
        // if (true) return renderError(400, 'ล้ำไปก่าา')  // Test error response to frontend
        // console.log('Reqest body => ', req.body)
        // console.log('Request headers => ', req.headers)
        // console.log('Request My user => ', req.user)

        const { first_name, last_name } = req.body
        const { id } = req.user
        const email = req.user.emailAddresses[0].emailAddress
        // console.log('email =====', id)

        const profile = await prisma.profile.upsert({
            where: {
                clerk_id: id
            },
            create: {
                clerk_id: id,
                first_name: first_name,
                last_name: last_name,
                email: email
            }, 
            update: {
                first_name: first_name,
                last_name: last_name,
                email: email
            }
        })

        res.json({
            result: profile, 
            message: 'Profile created successfully' 
        })
    } catch (error) {
        // throw new Error()
        // res.status(500).json({ message: error.message })
        console.log('Profile controller error ==>', error.message)
        next(error)
    }
}