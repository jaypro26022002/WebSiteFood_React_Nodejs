'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shop extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // 1 shop co nhieu san pham,foreign key Product
            // One-To-Many, between A and B, foreign key B 
            Shop.belongsTo(models.TypeProduct);
        }
    };
    Shop.init({
        id_shop: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nameShop: DataTypes.STRING,
        address: DataTypes.STRING,
        timeWork: DataTypes.STRING,
        id_img: DataTypes.INTEGER,
        id_type_product: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Shop',
    });
    return Shop;
};