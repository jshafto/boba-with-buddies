'use strict';

const bcrypt = require('bcryptjs');
const randName = require('faker')
const randNickname = require('nicknames')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'demo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'otherdemo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: 'Boba Buddy', emailAddress: 'boba@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba2@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba3@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba4@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba5@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba6@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba7@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba8@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba9@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba10@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[(Math.floor(Math.random()*100)+1)], emailAddress: 'boba11@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['nickname', 'emailAddress', 'hashedPassword', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
