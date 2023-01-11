const sequelize = require('../services/database-setup');
const { User } = require('../models');
const { throwError } = require('../utils/error')

exports.getUserInfo = async (req, res, next) => {
    try {
        const { user } = req;
        const fullUserObj = await getUserInfoFull(user.id);

        res.status(200).json({
            message: 'User found',
            data: {
                user: fullUserObj,
            },
        });
    } catch (err) {
        next(err);
    }
};
