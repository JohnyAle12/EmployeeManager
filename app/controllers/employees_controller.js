
const data = require('../../infraestructure/data/employees');
const responseModel = require('../helpers/response');

const getEmployeesList = async() => {
    let response = null;
    try {
        response = responseModel(true, data);
    } catch (error) {
        response = responseModel(
            false,
            null,
            `Error unexpected: ${error.message}`,
            error.statusCode
        );
    }

    return response;
}

module.exports = getEmployeesList