const { StatusCodes } = require('http-status-codes');
const employeeQuery = require('../../infraestructure/repositories/employees-query');
const HttpError = require('../exceptions/http-error');
const employeeDto = require('../helpers/employee-dto');

const findEmployees = async () => {
    const data = await employeeQuery.findEmployees();
    return employeeDto.getEmployeesFromDBArray(data);
}

const findOneEmployee = async (id) => {
    const data = await employeeQuery.findOneEmployee(id);
    if(!data[0]) throw new HttpError('User does not exist', StatusCodes.NOT_FOUND);

    return employeeDto.getEmployeeFromDBDto(data[0]);
}

const createEmployee = async ({
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fechaNacimiento,
    tipoIdentificacion,
    numeroIdentificacion,
    sueldo
}) => {

}

const updateEmployee = async ({
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    fechaNacimiento,
    tipoIdentificacion,
    numeroIdentificacion,
    sueldo
}, id) => {

}

const deleteEmployee = async (id) => {

}

module.exports = {
    findEmployees,
    findOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
}