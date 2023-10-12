const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('Cricket', {
  Name: {
    type: DataTypes.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  DOB: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 PhotoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BirthPlace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Career: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  NoOfMatches: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Score: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 Fifties: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Centuries: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Wickets: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Average: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
});

module.exports = Product;