require('dotenv').config();
require('./cache/redis').connectToRedis();
const express = require('express');
const cookineParser = require('cookie-parser');

//Import controllers
const carController = require('./controller/car.controller');
const userController = require('./controller/user.controller');

//Init aplication
const app = express();

// Middleware
app.use(express.json());
app.use(cookineParser());

//Setting up routes
app.use('/car', carController);
app.use('/user', userController);

module.exports = app;