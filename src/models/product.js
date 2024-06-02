'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Mỗi sản phẩm (product) chỉ thuộc về một loại sản phẩm (type_product).
            Product.belongsTo(models.TypeProduct);
            Product.belongsTo(models.Shop)
        }
    };
    Product.init({
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nameProduct: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        collection: DataTypes.STRING,
        pricedown: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        id_type_product: DataTypes.INTEGER,
        id_shop: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};