'use strict';

const responseHttp = require('../helpers/response');
const {getEmployeesFn, getEmployeeFn, createEmployeesFn, updateEmployeesFn, deleteEmployeesFn} = require('../../app/controllers/employees_controller');

module.exports.getEmployees = async (event) => {
  const {success, data, message, statusCode} = await getEmployeesFn();
  return responseHttp(success, data, message, statusCode);
};

module.exports.getEmployee = async (event) => {
  const {success, data, message, statusCode} = await getEmployeeFn(JSON.parse(event.pathParameters.id));
  return responseHttp(success, data, message, statusCode);
};

module.exports.createEmployees = async (event) => {
  const {success, data, message, statusCode} = await createEmployeesFn(JSON.parse(event.body));
  return responseHttp(success, data, message, statusCode);
};

module.exports.updateEmployees = async (event) => {
  const {success, data, message, statusCode} = await updateEmployeesFn(
    JSON.parse(event.body),
    JSON.parse(event.pathParameters.id
  ));
  return responseHttp(success, data, message, statusCode);
};

module.exports.deleteEmployees = async (event) => {
  const {success, data, message, statusCode} = await deleteEmployeesFn(JSON.parse(event.pathParameters.id));
  return responseHttp(success, data, message, statusCode);
};
