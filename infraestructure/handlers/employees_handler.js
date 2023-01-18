'use strict';

const responseHttp = require('../helpers/response');
const {getEmployeesFn, createEmployeesFn} = require('../../app/controllers/employees_controller');

module.exports.getEmployees = async (event) => {
  const {success, data, message, statusCode} = await getEmployeesFn();
  return responseHttp(success, data, message, statusCode);
};

module.exports.createEmployees = async (event) => {
  const {success, data, message, statusCode} = await createEmployeesFn(JSON.parse(event.body));
  return responseHttp(success, data, message, statusCode);
};
