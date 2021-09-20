'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trips', [{
      arrDate: '2021-09-20',
      depDate: '2021-09-30',
      region:'South America',
      country: "Brazil",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    [{
      arrDate: '2022-09-20',
      depDate: '2023-09-30',
      region:'Asia',
      country: "China",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    [{
      arrDate: '2022-10-20',
      depDate: '2023-11-30',
      region:'Europe',
      country: "England",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    )
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
