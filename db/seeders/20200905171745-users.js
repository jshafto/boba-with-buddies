'use strict';

const bcrypt = require('bcryptjs');
const randName = require('faker')
const randNickname = require('nicknames')

let num = Infinity
function randNumber(num){
  num = (Math.floor(Math.random() * 100))
  if(num === 99 || num === 100 || num === 97 || num === 95){
    num = randNumber(num)
  }
  return num
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { nickname: randNickname.all[randNumber(num)], emailAddress: 'demo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { nickname: randNickname.all[randNumber(num)], emailAddress: 'otherdemo@demo.demo', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: 'Boba Buddy', emailAddress: 'boba@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba2@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba3@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba4@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba5@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba6@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba7@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba8@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba9@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba10@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba11@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba12@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba13@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba14@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba15@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba16@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba17@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba18@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba19@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba20@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba21@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      {  nickname: randNickname.all[randNumber(num)], emailAddress: 'boba22@demo.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['nickname', 'emailAddress', 'hashedPassword', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
