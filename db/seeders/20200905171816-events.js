'use strict';

const db = require('../models');
const { User, City } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const someUser = await User.findOne({
      where: { emailAddress: "demo@demo.demo" }
    });
    const someCity = await City.findOne({
      where: { name: "Portland" }
    });
    await queryInterface.bulkInsert('Events', [
      {
        date: new Date(2021, 11, 24, 10, 33, 30, 0),
        address: '42 Wallaby Way',
        hostId: someUser.id,
        cityId: someCity.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(2020, 12, 5, 11, 30, 0, 0),
        address: '42 Wallaby Way',
        hostId: someUser.id,
        cityId: someCity.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { fields: ['date', 'address', 'hostId', 'cityId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
