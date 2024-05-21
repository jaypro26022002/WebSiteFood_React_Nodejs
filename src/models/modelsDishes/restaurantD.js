// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Restaurant extends Model {
//     static associate(models) {
//       Restaurant.hasMany(models.Menu, { foreignKey: 'RestaurantID' });
//       Restaurant.hasMany(models.Order, { foreignKey: 'RestaurantID' });
//     }
//   };
//   Restaurant.init({
//     RestaurantName: DataTypes.STRING,
//     Address: DataTypes.TEXT,
//     PhoneNumber: DataTypes.STRING,
//     Email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Restaurant',
//   });
//   return Restaurant;
// };
