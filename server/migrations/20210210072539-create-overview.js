'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Overviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unresolved: {
        type: Sequelize.INTEGER
      },
      overdue: {
        type: Sequelize.INTEGER
      },
      open: {
        type: Sequelize.INTEGER
      },
      onhold: {
        type: Sequelize.INTEGER
      },
      resolved: {
        type: Sequelize.INTEGER
      },
      received: {
        type: Sequelize.INTEGER
      },
      average_first_response: {
        type: Sequelize.STRING
      },
      average_response_time: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.INTEGER
      },
      AdminId: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Overviews');
  }
};