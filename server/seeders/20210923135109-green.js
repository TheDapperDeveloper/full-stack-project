'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 11,
      region: "East",
      state: "Vermont",
      location:"Green Mountains",
      photo: "https://cdn-assets.alltrails.com/uploads/photo/image/13649720/extra_large_81a73f020352b28cd240a8a87201ed09.jpg",
      description:"Thickly forested mountains boasting more than 600 miles of hiking trails connected together by the 272-mile Long Trail.",
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
