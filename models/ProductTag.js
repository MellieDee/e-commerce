// imp primary parts of sequelize lib
const { Model, DataTypes } = require('sequelize');

// import db connection from config
const sequelize = require('../config/connection');


// Initialize model (table) by extending off Seq Model class
class ProductTag extends Model { }

//create Junction Model/join/Through Table

ProductTag.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  // 2nd param of init
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
