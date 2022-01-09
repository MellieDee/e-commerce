// imp primary parts of sequelize lib
const { Model, DataTypes } = require('sequelize');

// import db connection from config
const sequelize = require('../config/connection.js');


// Initialize model (table) by extending off Seq Model class
class Category extends Model { }

Category.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  // 2nd param of init
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
);

module.exports = Category;
