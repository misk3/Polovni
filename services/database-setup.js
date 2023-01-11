const { Sequelize } = require('sequelize');
const { dbName, dbAdminUsername, dbAdmingPassword, dbHost, dbPort } = require('');

const sequelize = new Sequelize(dbName, dbAdminUsername, dbAdmingPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
