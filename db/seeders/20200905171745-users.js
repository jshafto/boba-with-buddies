'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {  nickname: 'julesdemo', emailAddress: 'demo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: 'demo2', emailAddress: 'otherdemo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() }
    ], { fields: ['nickname', 'emailAddress', 'hashedPassword', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
