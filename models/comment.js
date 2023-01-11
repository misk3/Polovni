const { DataTypes } = require('sequelize');
const sequelize = require('../services/database-setup');

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
})

module.exports = Comment;