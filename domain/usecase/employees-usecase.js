const employeeAdapter = require('../../app/model_adapters/employee-adapter');

const getEmployees = async () => {
    return employeeAdapter.findEmployees();
}
const createEmployee = async (employeeData) => {

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