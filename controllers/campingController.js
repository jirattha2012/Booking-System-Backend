
exports.getCampingList = (req, res) => {
    try {
        res.json('Camping list')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getCampingById = (req, res) => {
    try {
        res.json('Camping by id')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.createCamping = (req, res) => {
    try {
        res.json('Create camping')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.updateCamping = (req, res) => {
    try {
        res.send('Update camping')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteCamping = (req, res) => {
    try {
        res.send('Delete camping')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}