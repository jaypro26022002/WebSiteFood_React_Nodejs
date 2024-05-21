// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class OrderDetail extends Model {
//     static associate(models) {
//       OrderDetail.belongsTo(models.Order, { foreignKey: 'OrderID' });
//       OrderDetail.belongsTo(models.Dish, { foreignKey: 'DishID' });
//     }
//   };
//   OrderDetail.init({
//     Quantity: DataTypes.INTEGER,
//     Price: DataTypes.DECIMAL(10, 2)
//   }, {
//     sequelize,
//     modelName: 'OrderDetail',
//   });
//   return OrderDetail;
// };
