'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trips', [{
      tripID: 5,
      region: "West",
      state: "Montana",
      location:"Glacier National Park",
      photo: "https://images.unsplash.com/photo-1568582285914-4bfacceaf551?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhY2llciUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:"Area in the Rocky Mountains with over 700 miles of hiking trails with a route to the popular Hidden Lake.",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * 
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
