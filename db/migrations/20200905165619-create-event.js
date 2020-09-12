'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        // could allow null for simplicity during development tests
        allowNull: false,
        type: Sequelize.DATE
      },
      address: {
        // could allow null for simplicity during development tests
        allowNull: false,
        type: Sequelize.STRING
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
        onDelete: 'cascade'
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cities" },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};