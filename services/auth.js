const jwt = require('jsonwebtoken');
const { auth } = require('../utils/constants')
const { jwtAccessSecret, jwtRefreshSecret } = require('../config');
const { throwError } = require('../utils/errors');

exports.signAccessToken = userId => {
    return signToken(userId, jwtAccessSecret, auth.accessTokenValidityTime);
  };
  
  exports.signRefreshToken = userId => {
    return signToken(userId, jwtRefreshSecret, auth.refreshTokenValidityTime);
  };
  
  exports.extractAndValidateAccessToken = fullToken => {
    if (!fullToken) throwError('Not authenticated', 401);
    const accessToken = fullToken.split(' ')[1];
    try {
      const decodedToken = extractAndValidateToken(accessToken, jwtAccessSecret);
      return decodedToken;
    } catch (err) {
      throwError('Not authenticated', 401);
    }
  };
  
  exports.extractAndValidateRefreshToken = refreshToken => {
    if (!refreshToken) throwError('Refresh token not provided', 400);
    const decodedToken = extractAndValidateToken(refreshToken, jwtRefreshSecret);
    return decodedToken;
  };

  exports.generateTokenPair = async userId => {
    const [accessToken, refreshToken] = await Promise.all([this.signAccessToken(userId), this.signRefreshToken(userId)]);
    return [accessToken, refreshToken];
  };

  const signToken = (userId, secretKey, expiresIn) => {
    return new Promise((resolve, reject) => {
      const options = {
        expiresIn,
        audience: userId + '',
      };
  
      jwt.sign({}, secretKey, options, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  };
  
  const extractAndValidateToken = (token, secretKey) => {
    if (!token) throwError('Token not provided', 400);
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, secretKey);
    } catch (err) {
      throwError(err.message, 400);
    }
    return decodedToken;
  };