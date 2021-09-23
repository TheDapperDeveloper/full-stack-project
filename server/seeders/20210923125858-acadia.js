'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 7,
      region: "East",
      state: "Maine",
      location:"Acadia National Park",
      photo: "https://images.unsplash.com/photo-1587486520496-94ed3bbaf99e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      description:"Located on Mount Desert Island, Acadia National Park has over 150 miles of trails. The difficulty of the trails range from easy to strenuous. One of the more popular attractions for hikers is the famous Carriage Roads financed by John D. Rockefeller, Jr.",
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
