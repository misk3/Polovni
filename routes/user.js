const express = require('express');
const { verifyToken } = require('../middleware/auth');


const router = express.Router();

router.get('/me', verifyToken);

router.post(
    '/user/info',
    verifyToken,
    [
        body('firstName').trim().not().isEmpty().withMessage('First name cannot be empty'),
        body('lastName').trim().not().isEmpty().withMessage('Last name cannot be empty'),
    ]
)

module.exports = router;