const responseModel = (success, data = null, message = null, statusCode = 200) => ({
    success,
    data,
    message,
    statusCode
});

module.exports = responseModel;