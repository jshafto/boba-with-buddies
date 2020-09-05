'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rsvp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rsvp.init({
     //TODO Setup ORM Auth
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rsvp',
  });
  return Rsvp;
};