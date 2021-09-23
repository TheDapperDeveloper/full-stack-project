'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 10,
      region: "East",
      state: "Tennessee",
      location:"Great Smoky Mountains National Park",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRis80XMdGWeULbL-PQulguomleI9LP9PTB2A&usqp=CAU",
      description:"Many trails to choose from where forests can be explored and streams can be followed to waterfalls",
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
