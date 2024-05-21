// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Menu extends Model {
//     static associate(models) {
//       Menu.belongsTo(models.Restaurant, { foreignKey: 'RestaurantID' });
//       Menu.hasMany(models.Dish, { foreignKey: 'MenuID' });
//     }
//   };
//   Menu.init({
//     MenuName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Menu',
//   });
//   return Menu;
// };
