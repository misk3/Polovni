const express = require('express');
const { body } = require('express-validator');
const { handleValidationMiddleware } = require('../middlewares/validation');
const { throwError } = require('../utils/errors');
const { User } = require('../models');