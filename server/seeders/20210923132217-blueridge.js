'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 9,
      region: "East",
      state: "North Carolina",
      location:"The Blue Ridge Mountains",
      photo: "https://www.greatsmokies.com/wp-content/uploads/2018/06/BlueRidgeParkway.jpg",
      description:"469 uninterrupted miles of spectacular views of mountains, waterfalls, and diverse vegetation.",
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
