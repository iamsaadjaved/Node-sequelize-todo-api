const Sequelize = require('sequelize')

module.exports = new Sequelize('mySqlDatabase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });



