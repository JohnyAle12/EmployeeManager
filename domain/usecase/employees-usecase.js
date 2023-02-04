const { StatusCodes } = require('http-status-codes');
const HttpError = require('../../app/exceptions/http-error');
const employeeAdapter = require('../../app/model_adapters/employee-adapter');

const getEmployees = async () => {
    return employeeAdapter.findEmployees();
}
const createEmployee = async (employeeData) => {
    const birthDate = employeeData.fechaNacimiento;
    const today = new Date();
    
    if(birthDate > today) throw new HttpError('Fecha de nacimiento incorrecta', StatusCodes.BAD_REQUEST);

    return await employeeAdapter.createEmployee(employeeData);
}
const updateEmployee = async (employeeData, id) => {

}
const deleteEmployee = async (id) => {

}
const getDetailEmployee = async (id) => {
    return await employeeAdapter.findOneEmployee(id);
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getDetailEmployee,
}