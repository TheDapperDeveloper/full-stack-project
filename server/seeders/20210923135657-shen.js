'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 12,
      region: "East",
      state: "Virginia",
      location:"Shenandoah National Park",
      photo: "https://rt-homepage.roadtrippers.com/wp-content/uploads/2020/04/shenandoah-landscape-2.jpg",
      description:"Mostly forested park featuring wetlands, waterfalls, and rocky peaks.",
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
