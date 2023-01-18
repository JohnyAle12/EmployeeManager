const { StatusCodes }  = require('http-status-codes');
const data = require('../../infraestructure/data/employees');
const responseModel = require('../helpers/response');

const getEmployeesFn = async() => {
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

const createEmployeesFn = async(data) => {
    let response = null;
    try {
        response = responseModel(true, data, 'Empleado creado !', StatusCodes.CREATED);
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

module.exports = {
    getEmployeesFn,
    createEmployeesFn
}