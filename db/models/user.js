'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Event, { foreignKey: "hostId" })
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