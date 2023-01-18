'use strict';

const responseHttp = require('../helpers/response')

module.exports.getEmployees = async (event) => {
  return responseHttp(true, event);
};
