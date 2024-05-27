'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class FoodType extends Model {
        static associate(models) {
            // Define association here
            FoodType.hasMany(models.Dish, { foreignKey: 'FoodTypeID' });
        }
    };
    FoodType.init({
        FoodTypeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        FoodTypeName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'FoodType',
    });
    return FoodType;
};
