// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       User.hasMany(models.Order, { foreignKey: 'UserID' });
//     }
//   };
//   User.init({
//     UserName: DataTypes.STRING,
//     Email: DataTypes.STRING,
//     Password: DataTypes.STRING,
//     PhoneNumber: DataTypes.STRING,
//     Address: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
