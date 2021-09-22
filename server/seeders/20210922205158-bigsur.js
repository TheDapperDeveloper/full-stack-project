'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 2,
      region: "West",
      state: "California",
      location:"Big Sur",
      photo: "https://images.unsplash.com/photo-1581790061118-2cd9a40164b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      description:"Long and scenic stretch of undeveloped coastline where the Santa Lucia Mountains rise from the Pacific Ocean.",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
