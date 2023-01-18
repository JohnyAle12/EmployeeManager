
const data = require('../../infraestructure/data/employees');

const getEmployeesList = async() => {
    let response = {
        success: true,
        data: null,
        message: null,
        statusCode: 200
    }

    try {
        response.data = data;
    } catch (error) {
        response.success = false;
        response.message = `Error unexpected: ${error.message}`;
        response.statusCode = error.statusCode;
    }

    return response;
}

module.exports = getEmployeesList