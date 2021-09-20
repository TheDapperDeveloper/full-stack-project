'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itineraries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete: 'CASCADE',
        references: {
          model:'userregistration',
          key: 'id',
          as: 'userID'
        }
      },
      tripID:{
        type:Sequelize.STRING,
        allowNull:false,
        onDelete: 'CASCADE',
        references: {
          model:'trips',
          key: 'id',
          as: 'tripID'
        }
      },
      arrDate: {
        type: Sequelize.DATEONLY
      },
      depDate: {
        type: Sequelize.DATEONLY
      },
      location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('itineraries');
  }
};