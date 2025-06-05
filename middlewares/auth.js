const renderError = require("../utils/renderError")
const { clerkClient, getAuth } = require("@clerk/express")

exports.authenticate = async (req, res, next) => {
    try {
        const { userId } = getAuth(req)
        // console.log('user_id ==', req.auth.userId, '&&', userId)

        if (!userId) {
            return renderError(401, 'Unauthorized!')
        }

        // set user ด้วย clerk สามารถเช็คข้อมูล user ตัวเองได้ด้วย req.user
        const user = await clerkClient.users.getUser(userId)
        req.user = user
        // console.log('getUser ==> ', req.user)

        next()
    } catch (error) {
        // res.status(500).json({ error: error.message })
        next(error)
    }
}