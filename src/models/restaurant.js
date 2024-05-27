'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Restaurant extends Model {
        static associate(models) {
            Restaurant.hasMany(models.Dish, { foreignKey: 'RestaurantID' });
        }
    };
    Restaurant.init({
        RestaurantID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        RestaurantName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // other attributes
    }, {
        sequelize,
        modelName: 'Restaurant',
    });
    return Restaurant;
};
