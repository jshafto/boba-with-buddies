'use strict';

const db = require('../models');
const { User, City, Event } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoUser = await User.findOne({ where: {emailAddress: 'boba@demo.com'}});
    
    
    const someUser1 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser2 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser3 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser4 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser5 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someUser6 = await User.findOne({order: [[Sequelize.fn('RANDOM')]]});
    
    
    const sanFran = await City.findOne({
      order: [
        [Sequelize.fn('RANDOM')]
      ], 
      where: {
        name: 'San Francisco'
      }
    })
    
    const demoEvent = await Event.findOne({
      where: {
        cityId: sanFran.id
      }
    })
    const demoEvent2 = await Event.findOne({
      where: {
        cityId: sanFran.id
      }
    })
    const demoEvent3 = await Event.findOne({
      where: {
        cityId: sanFran.id
      }
    })
    
    const someEvent1 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent2 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent3 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent4 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent5 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent6 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent7 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent8 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    const someEvent9 = await Event.findOne({order: [[Sequelize.fn('RANDOM')]]});
    
    
    
    
    await queryInterface.bulkInsert('Rsvps', [
      
      { userId: demoUser.id, eventId: demoEvent.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: demoUser.id, eventId: demoEvent2.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: demoUser.id, eventId: demoEvent3.id, createdAt: new Date(), updatedAt: new Date() },
      
      { userId: someUser1.id, eventId: someEvent1.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent1.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser3.id, eventId: someEvent1.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent2.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent2.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent3.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent3.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser3.id, eventId: someEvent3.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser4.id, eventId: someEvent3.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser3.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser4.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser5.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser6.id, eventId: someEvent4.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent5.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent5.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent6.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent6.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser3.id, eventId: someEvent6.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent7.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser2.id, eventId: someEvent7.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent8.id, createdAt: new Date(), updatedAt: new Date() },
      { userId: someUser1.id, eventId: someEvent9.id, createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['userId', 'eventId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rsvps', null, {});
  }
};
