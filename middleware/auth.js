
const { User } = require('../models');
const { throwError } = require('../utils/error');


exports.isAuthenticated = async (req, res, next) => {
    try {
        const fullToken = req.get('Authorized');
        const decodedToken = extractAndValidateAccessToken(fullToken);
        const user = await User.findByPk(decodedToken.id);
        if(!user) {
            throwError('User not found', 404)
        }
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
}