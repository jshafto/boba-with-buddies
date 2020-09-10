'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Event, {
        as: 'hostedEvents',
        foreignKey: "hostId"
      })
      User.belongsToMany(models.Event, {
        through: models.Rsvp,
        otherKey: 'eventId',
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    //TODO Setup ORM Auth
    nickname: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
