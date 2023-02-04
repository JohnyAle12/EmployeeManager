const db = require("./connection");

const tableName = 'empleados';

const findEmployees = async () => {
    return db.select().table(tableName);
}

const findOneEmployee = async (id) => {
    return db.select().where('id', id).table(tableName);
}
const createEmployee = async ({
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento,
    tipo_identificacion,
    numero_identificacion,
    sueldo
}) => {

}
const updateEmployee = async ({
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento,
    tipo_identificacion,
    numero_identificacion,
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
