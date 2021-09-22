'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 3,
      region: "West",
      state: "California",
      location:"Yosemite National Park",
      photo: "https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW9zZW1pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description:"The park has over 800 miles of trails. The main attractions are the sequoias, the highest waterfall in the United States, and the popular Half Dome and El Capitan.",
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
