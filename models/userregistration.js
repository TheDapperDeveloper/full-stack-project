'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userRegistration.hasOne(models.itinerary, {
        foreignKey: 'userID'
      })
      // define association here
    }
  };
  userRegistration.init({
    firstName: DataTypes.STRING, 
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userRegistration',
  });
  return userRegistration;
};