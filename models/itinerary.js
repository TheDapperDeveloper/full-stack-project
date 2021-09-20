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
      itinerary.belongsTo(models.userregistration, {
        foreignKey: 'userID'
      }),
      itinerary.hasMany(models.trips, {
        foreignKey:'tripID'
      });
      // define association here
    };
  };
  itinerary.init({
    userID: DataTypes.INTEGER,
    tripID: DataTypes.STRING,
    arrDate: DataTypes.DATEONLY,
    depDate: DataTypes.DATEONLY,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itinerary',
  });
  return itinerary;
};