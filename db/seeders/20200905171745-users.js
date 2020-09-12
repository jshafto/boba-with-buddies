'use strict';

const bcrypt = require('bcryptjs');
const randName = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { nickname: randName.name.firstName(), emailAddress: 'demo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { nickname: randName.name.firstName(), emailAddress: 'otherdemo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: 'Boba Buddy', emailAddress: 'boba@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba2@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba3@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba4@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba5@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba6@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba7@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba8@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba9@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba10@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randName.name.firstName(), emailAddress: 'boba11@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['nickname', 'emailAddress', 'hashedPassword', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
