'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  itinerary.init({
    arrDate: DataTypes.DATEONLY,
    depDate: DataTypes.DATEONLY,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itinerary',
  });
  return itinerary;
};