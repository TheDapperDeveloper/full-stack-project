'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      arrDate: "12/23/2021",
      depDate: "01/01/2022",
      region: "Asia",
      country: "Singapore",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      arrDate: "01/15/2022",
      depDate: "02/01/2022",
      region: "Europe",
      country: "England",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      arrDate: "06/26/2022",
      depDate: "07/06/2022",
      region: "Africa",
      country: "Togo",
      createdAt: new Date(),
      updatedAt: new Date()
    });
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
