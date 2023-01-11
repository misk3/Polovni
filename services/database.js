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
    ]);
    } catch (error) {
        console.log(error);
    }
};