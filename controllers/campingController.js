
exports.getCampingList = (req, res, next) => {
    try {
        res.json('Camping list')
    } catch (error) {
        next(error)
    }
}

exports.getCampingById = (req, res) => {
    try {
        res.json('Camping by id')
    } catch (error) {
        next(error)
    }
}

exports.createCamping = (req, res) => {
    try {
        res.json('Create camping')
    } catch (error) {
        next(error)
    }
}

exports.updateCamping = (req, res) => {
    try {
        res.send('Update camping')
    } catch (error) {
        next(error)
    }
}

exports.deleteCamping = (req, res) => {
    try {
        res.send('Delete camping')
    } catch (error) {
        next(error)
    }
}