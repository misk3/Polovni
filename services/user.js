const { raw } = require('express');
const User = require('../models/user');
const { throwError } = require('../utils/error');

exports.getUserInfo = async userId => {
    const user = await User.findByPk(userId, {
        attributes: [
        'id',
        'firstName',
        'lastName',
        'password',
    ],
    });

    if (!user) throwError('User not found', 404);

    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
    };
};

    exports.initializeNewUser = user => ({
        firstName: null,
        lastName: null,
        password: null,

    });
