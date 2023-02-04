const employeeQuery = require('../../infraestructure/repositories/employees-query');
const employeeDto = require('../helpers/employee-dto');

const findEmployees = async () => {
    const data = await employeeQuery.findEmployees();
    return employeeDto.getEmployeesFromDBArray(data);
}

const findOneEmployee = async (id) => {

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