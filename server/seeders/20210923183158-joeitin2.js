'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Itineraries', [{
      userID: 1,
      tripID: 10,
      title: "Fun with Family",
      arrDate: "06/02/2022",
      depDate: "06/10/2022",
      location:"Great Smoky Mountains National Park",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
