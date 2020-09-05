'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', []);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
