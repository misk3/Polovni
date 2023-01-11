const express = require('express');
const { param } = require('express-validator');
const { createCar, getCarById } = require ('../controller/car.controller')
const { verifyToken } = require('../middleware/auth');
const { route } = require('./comment');
const router = express.Router();

router.post('/cars', verifyToken, createCar);

router.get(
    '/cars/id', 
    verifyToken,
    [
        param('id').custom((value, {req}) => {
            req.fetched.carId = value;
            return true;
        }),
    ],
    getCarById,
);

module.exports = router;
