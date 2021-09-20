'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trips.init({
    arrDate: DataTypes.DATEONLY,
    depDate: DataTypes.DATEONLY,
    region: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trips',
  });
  return trips;
};