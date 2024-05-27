'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Food extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Food.init({
        nameFood: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        collection: DataTypes.STRING,
        pricedown: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        dishesId: DataTypes.INTEGER,
        foodtypeId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Food',
    });
    return Food;
};