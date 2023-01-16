const { validationResult } = require('express-validator');

// error handling middleware
exports.handleValidationMiddleware = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      const error = new Error(errorMessage);
      error.statusCode = 422;
      next(error);
    }
    next();
  } catch (err) {
    next(err);
  }
};
