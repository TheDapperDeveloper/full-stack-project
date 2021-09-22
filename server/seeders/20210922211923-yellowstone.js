'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 4,
      region: "West",
      state: "Montana",
      location:"Yellowstone National Park",
      photo: "https://images.unsplash.com/photo-1594073632422-ef9768f87fa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eWVsbG93c3RvbmUlMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:"The world's first national park. Trails lead to hot springs, mudpots, fumaroles, and geysers",
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
