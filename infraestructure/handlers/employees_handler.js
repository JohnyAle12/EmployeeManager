'use strict';

const responseHttp = require('../helpers/response');
const getEmployeesList = require('../../app/controllers/employees_controller');

module.exports.getEmployees = async (event) => {
  const {success, data, message, statusCode} = await getEmployeesList();
  return responseHttp(success, data, message, statusCode);
};
