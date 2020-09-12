'use strict';

const db = require('../models');
const { User, City } = db;
const randAddress = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const demoUser = await User.findOne({
      where: {
        emailAddress: 'boba@demo.com'
      }
    });

    const someUser1 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser2 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser3 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser4 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser5 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser6 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser7 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser8 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser9 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser10 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser11 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser12 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser13 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser14 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser15 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser16 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser17 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser18 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});

    

    const sanFran = await City.findOne({
      where: {
        name: 'San Francisco'
      }
    });

    const someCity1 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity2 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity3 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity4 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity5 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity6 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity7 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity8 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity9 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity10 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity11 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity12 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity13 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someCity14 = await City.findOne({order: [[Sequelize.fn('RANDOM')]]});

    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    
    await queryInterface.bulkInsert('Events', [
      
      {date: new Date(),address: '825 Battery st.',hostId: demoUser.id,cityId: sanFran.id,createdAt: new Date(),updatedAt: new Date()},
      { date: new Date(), address: 'Golden Gate Bridge',hostId: demoUser.id,cityId: sanFran.id,createdAt: new Date(),updatedAt: new Date()},
      
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser8.id, cityId: someCity8.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser1.id, cityId: someCity1.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser2.id, cityId: someCity2.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser3.id, cityId: someCity3.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser4.id, cityId: someCity4.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser5.id, cityId: someCity5.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser8.id, cityId: someCity8.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser2.id, cityId: someCity2.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser6.id, cityId: someCity6.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser7.id, cityId: someCity7.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser3.id, cityId: someCity3.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser4.id, cityId: someCity4.id, createdAt: new Date(), updatedAt: new Date() },
      
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser9.id, cityId: someCity9.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser10.id, cityId: someCity9.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser11.id, cityId: someCity10.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser12.id, cityId: someCity11.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser13.id, cityId: someCity12.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser14.id, cityId: someCity13.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser15.id, cityId: someCity13.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser16.id, cityId: someCity14.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser17.id, cityId: someCity14.id, createdAt: new Date(), updatedAt: new Date() },
      { date: randomDate(new Date(), new Date(2021, 5, 31)), address: randAddress.address.streetAddress(), hostId: someUser18.id, cityId: someCity14.id, createdAt: new Date(), updatedAt: new Date() },


    ], { fields: ['date', 'address', 'hostId', 'cityId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};