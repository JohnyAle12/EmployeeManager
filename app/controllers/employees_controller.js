const { StatusCodes }  = require('http-status-codes');
// const data = require('../../infraestructure/data/employees');
const responseHelper = require('../helpers/response');
const { getEmployees, getDetailEmployee } = require('../../domain/usecase/employees-usecase');

const getEmployeesFn = async() => {
    let response = null;
    try {
        const data = await getEmployees();
        response = responseHelper(true, data);
    } catch (error) {
        response = responseHelper(
            false,
            null,
            `Error unexpected: ${error.message}`,
            error.statusCode
        );
    }

    return response;
}

const getEmployeeFn = async(id) => {
    let response = null;
    try {
        const employee = await getDetailEmployee(id);
        response = responseHelper(true, employee);
    } catch (error) {
        response = responseHelper(
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
        response = responseHelper(true, data, 'Empleado creado !', StatusCodes.CREATED);
    } catch (error) {
        response = responseHelper(
            false,
            null,
            `Error unexpected: ${error.message}`,
            error.statusCode
        );
    }

    return response;
}

const updateEmployeesFn = async(id) => {
    let response = null;
    try {
        response = responseHelper(true, id, 'Empleado actualizado !', StatusCodes.CREATED);
    } catch (error) {
        response = responseHelper(
            false,
            null,
            `Error unexpected: ${error.message}`,
            error.statusCode
        );
    }

    return response;
}

const deleteEmployeesFn = async(id) => {
    let response = null;
    try {
        response = responseHelper(true, id, 'Empleado eliminado !', StatusCodes.OK);
    } catch (error) {
        response = responseHelper(
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
    getEmployeeFn,
    createEmployeesFn,
    updateEmployeesFn,
    deleteEmployeesFn
}