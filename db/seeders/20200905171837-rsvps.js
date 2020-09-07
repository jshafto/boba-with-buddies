'use strict';

const db = require('../models');
const { User, Event } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const someUser = await User.findOne({
      where: { emailAddress: "otherdemo@demo.demo" }
    });
    const someEvent = await Event.findOne();
    await queryInterface.bulkInsert('Rsvps', [
      { userId: someUser.id, eventId: someEvent.id, createdAt: new Date(), updatedAt: new Date() }
    ], { fields: ['userId', 'eventId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rsvps', null, {});
  }
};
