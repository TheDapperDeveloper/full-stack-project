'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trips.hasOne(models.Itineraries, {
        foreignKey:'tripID'
      })
      // define association here
    }
  };
  Trips.init({
    tripID: DataTypes.INTEGER,
    region: DataTypes.STRING,
    state: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trips',
  });
  return Trips;
};