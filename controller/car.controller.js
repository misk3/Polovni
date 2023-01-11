const { Car } = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../services/database-setup');



exports.getAllCars = async (req, res, next) => {
    const transaction = await sequelize.transaction();

    try {
        const cars = await Car.findAll();
        await transaction.commit();

        res.status(200).json({
            message: 'Cars found',
            data: {
                cars: cars,
            },
        });
    } catch (err) {
        await transaction.rollback();
        next(err);
    }
}

exports.getCarById = async (req, res, next) => {
    try {
      const { carId } = req.fetched;
  
      var car = await Car.findByPk(carId);
  
      res.status(200).json({
        message: 'Car found',
        data: { car },
      });
    } catch (err) {
      next(err);
    }
  };



