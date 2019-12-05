'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rooms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      value: {
        type: Sequelize.REAL,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      availability: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'AVAILABLE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rooms');
  }
};
