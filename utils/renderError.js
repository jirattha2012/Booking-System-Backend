const renderError = (status_code, message) => {
    const error = new Error(message)
    error.statusCode = status_code

    throw error
}


module.exports = renderError