const sequelize = require('../services/database-setup');

const { User } = require('../models');
const { getUserInfo, initializeNewUser } = require('../server/user');
const { throwError } = require('../utils/errors');
const { verifyToken } = require('../services/auth');

exports.singUp = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    try {
        const newUserObj = initializeNewUser(user);
        const newUser = await User.create(newUserObj, { transaction });

        await transaction.commit();

        res.status(201).json({
            message: 'User successfully signed up!',
        });
    } catch (err) {
        await transaction.rollback();
        next(err);
    }
}
