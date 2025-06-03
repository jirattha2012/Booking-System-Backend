exports.authenticate = (req, res, next) => {
    try {
        if (true){
            // res.send('middleware success')
            next()
        } else {
            res.send('No access denied!')
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}