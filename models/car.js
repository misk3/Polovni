const { DataTypes } = require('sequelize');
const sequelize = require('../services/database-setup');

const Car = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    manufacturer: {
        type: DataTypes.STRING,
    },
    model: {
        type: DataTypes.STRING,
    },
    yearMade: {
        type: DataTypes.INTEGER,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

module.exports = Car;