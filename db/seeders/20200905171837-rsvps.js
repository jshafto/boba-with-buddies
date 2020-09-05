'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rsvps', []);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rsvps', null, {});
  }
};
