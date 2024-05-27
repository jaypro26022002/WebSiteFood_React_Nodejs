'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dish extends Model {
        static associate(models) {
            // Define association here
            Dish.belongsTo(models.Restaurant, { foreignKey: 'RestaurantID' });
            Dish.belongsTo(models.FoodType, { foreignKey: 'FoodTypeID' });
        }
    };
    Dish.init({
        DishID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        RestaurantID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Restaurants',
                key: 'RestaurantID'
            }
        },
        FoodTypeID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'FoodTypes',
                key: 'FoodTypeID'
            }
        },
        DishName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Dish',
    });
    return Dish;
};
