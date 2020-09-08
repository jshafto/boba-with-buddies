'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      //! ES6 syntax has its differences will need review
      
      Event.belongsTo(models.User, {foreignKey: "hostId"})
      Event.belongsTo(models.City, {foreignKey: "cityId"})
      //! Events belongs to Users in Two ways
      // Events.belongsToMany(models.User, {through: "Rsvps"})
=======
      // it seems like we need to alias one of the
      Event.belongsTo(models.User, {
        as: "host",
        foreignKey: "hostId"
      })
      Event.belongsTo(models.City, {foreignKey: "cityId"})
      //! Events belongs to Users in Two ways
      Event.belongsToMany(models.User, {
        through: models.Rsvp,
        otherKey: 'userId',
        foreignKey: 'eventId'
      })
>>>>>>> cf50dda428630263e213bc6d1fb1f79dfc003e92
    }
  };
  Event.init({
    //TODO Setup ORM Auth
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    hostId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
