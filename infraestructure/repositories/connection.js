const db = require('knex')({
    client: 'mysql',
    connection: {
      host : 'employee-manager.ce6utlo5cdri.us-east-2.rds.amazonaws.com',
      port : 3306,
      user : 'admin',
      password : 'alejo123pv',
      database : 'serverless'
    }
});

module.exports = db;