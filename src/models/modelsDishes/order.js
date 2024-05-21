// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Order extends Model {
//     static associate(models) {
//       Order.belongsTo(models.User, { foreignKey: 'UserID' });
//       Order.belongsTo(models.Restaurant, { foreignKey: 'RestaurantID' });
//       Order.hasMany(models.OrderDetail, { foreignKey: 'OrderID' });
//     }
//   };
//   Order.init({
//     OrderDate: DataTypes.DATE,
//     TotalAmount: DataTypes.DECIMAL(10, 2)
//   }, {
//     sequelize,
//     modelName: 'Order',
//   });
//   return Order;
// };
