//const { throwError } = require('../utils/error')
const jwt = require('jsonwebtoken');
const ROLE_ENUM = require('../enum/role.enum');
const { User } = require('../models');
const { throwError } = require('../utils/error');

const { TOKEN_KEY, JWT_NAME } = process.env;

const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies[JWT_NAME];

        if (!token) return res.status(403).send('You are not authorized.')

        const decoded = jwt.verify(token, TOKEN_KEY)

        if (decoded.role !== ROLE_ENUM.ADMIN) res.status(403).send('You are not authorized.')
        next();
    } catch (error) {
        console.error('Invalid token.', error)
    }
}

module.exports = verifyToken;


// exports.isAuthenticated = async (req, res, next) => {
//     try {
//         const fullToken = req.get('Authorized');
//         const decodedToken = extractAndValidateAccessToken(fullToken);
//         const user = await User.findByPk(decodedToken.id);
//         if(!user) {
//             throwError('User not found', 404)
//         }
//         req.user = user;
//         next();
//     } catch (err) {
//         next(err);
//     }
// }
