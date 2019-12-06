'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        id: 1,
        role_name: 'CLIENT',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        role_name: 'RECEPCIONIST',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        role_name: 'ADMIN',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
