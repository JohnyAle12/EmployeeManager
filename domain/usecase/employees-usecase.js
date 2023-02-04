const { StatusCodes } = require('http-status-codes');
const HttpError = require('../../app/exceptions/http-error');
const employeeAdapter = require('../../app/model_adapters/employee-adapter');

const getEmployees = async () => {
    return employeeAdapter.findEmployees();
}
const createEmployee = async (employeeData) => {
    await validateBirthDate(employeeData.fechaNacimiento);
    return await employeeAdapter.createEmployee(employeeData);
}
const updateEmployee = async (employeeData, id) => {
    await validateEmployeeExist(id);
    await validateBirthDate(employeeData.fechaNacimiento);
    return await employeeAdapter.updateEmployee(employeeData, id);
}
const deleteEmployee = async (id) => {
    
}
const getDetailEmployee = async (id) => {
    await validateEmployeeExist(id);
    return await employeeAdapter.findOneEmployee(id);
}

const validateBirthDate = async(date) => {
    const birthDate = new Date(date);
    const today = new Date();
    
    if(birthDate > today){
        throw new HttpError('Fecha de nacimiento incorrecta', StatusCodes.BAD_REQUEST)
    }
}

const validateEmployeeExist = async(id) => {
    if(! await employeeAdapter.findOneEmployee(id))
        throw new HttpError('User does not exist', StatusCodes.NOT_FOUND);
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getDetailEmployee,
}