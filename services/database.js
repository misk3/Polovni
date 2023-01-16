const {
    Car,
    Comment,
    User
} = require('../models')

exports.setupRelations = () => {

    User.hasOne(Token);
    Token.belongsTo(User);

    User.hasMany(Car);
    Car.belongsTo(User);

    Car.hasMany(Comment);
    Comment.belongsTo(Car);

}

exports.initializeDatabase = async () => {
    try {
        const car = await Car.fineAll();
        if (car.length > 0 ){
            return;
        }


    // Cars
    await Car.bulkCreate([
        // ADD MODELS
        { id: 1, name: 'Volvo', model: 'XC40' },
        { id: 2, name: 'Volvo', model: 'XC60' },
        { id: 3, name: 'Volvo', model: 'XC90' },
        { id: 4, name: 'VW', model: 'Golf 7' },
        { id: 5, name: 'VW', model: 'Tiguan' },
        { id: 6, name: 'VW', model: 'Polo' },
        { id: 7, name: 'Audi', model: 'A5' },
        { id: 8, name: 'Audi', model: 'A6' },
        { id: 9, name: 'Audi', model: 'A8' },
    ]);
    } catch (error) {
        console.log(error);
    }
};