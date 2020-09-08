'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities', [
      { name: 'Portland', state: 'Oregon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pittsburgh', state: 'Pennsylvania', createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['name', 'state', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};


