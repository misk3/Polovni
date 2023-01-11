const express = require('express');
const { getCarById } = require('../controller/car.controller');
const verifyToken = require('../middleware/auth');

const router = express.Router();

router.post('/cars', verifyToken, createCar);

router.get('/cars/:id', verifyToken, 
[param('id').custom((value, {req}) =>{
req.fetched.carId = value;
return true;
}),
],
getCarById,
);

router.get('/cars', getAllCars);

module.exports = router;