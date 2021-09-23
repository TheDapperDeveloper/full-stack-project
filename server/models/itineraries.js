'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Itineraries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itineraries.belongsTo(models.Users, {
        foreignKey:'userID',
        onDelete:'CASCADE'
      });
      Itineraries.belongsTo(models.Trips, {
        foreignKey: 'tripID',
        onDelete: 'CASCADE'
      })
      // define association here
    }
  };
  Itineraries.init({
    userID: DataTypes.INTEGER,
    tripID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    arrDate: DataTypes.STRING,
    depDate: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Itineraries',
  });
  return Itineraries;
};