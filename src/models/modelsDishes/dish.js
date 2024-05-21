// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Dish extends Model {
//     static associate(models) {
//       Dish.belongsTo(models.Menu, { foreignKey: 'MenuID' });
//       Dish.hasMany(models.OrderDetail, { foreignKey: 'DishID' });
//     }
//   };
//   Dish.init({
//     DishName: DataTypes.STRING,
//     Price: DataTypes.DECIMAL(10, 2)
//   }, {
//     sequelize,
//     modelName: 'Dish',
//   });
//   return Dish;
// };
