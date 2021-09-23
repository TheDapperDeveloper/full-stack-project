'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 1,
      region: "West",
      state: "Arizona",
      location:"Grand Canyon National Park",
      photo: "https://www.nps.gov/grca/planyourvisit/images/powell-pt-640.jpg",
      description:"South Kaibab Trail leads to panoramic views of the Grand Canyon",
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
