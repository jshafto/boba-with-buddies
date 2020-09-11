'use strict';

const db = require('../models');
const { User, City } = db;
const randAddress = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const someUser1 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser2 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser3 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser4 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser5 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser6 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser7 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someUser8 = await User.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    
    

    const someCity1 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity2 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity3 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity4 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity5 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity6 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity7 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });
    const someCity8 = await City.findOne({
      order: [[Sequelize.fn('RANDOM')]]
    });

    
    await queryInterface.bulkInsert('Events', [
      {
        date: new Date(2021, 11, 24, 10, 33, 30, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser8.id,
        cityId: someCity8.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser1.id,
        cityId: someCity1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser2.id,
        cityId: someCity2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser3.id,
        cityId: someCity3.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser4.id,
        cityId: someCity4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser5.id,
        cityId: someCity5.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser8.id,
        cityId: someCity8.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser2.id,
        cityId: someCity2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser6.id,
        cityId: someCity6.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser7.id,
        cityId: someCity7.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser3.id,
        cityId: someCity3.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: randAddress.address.streetAddress(),
        hostId: someUser4.id,
        cityId: someCity4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { fields: ['date', 'address', 'hostId', 'cityId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
