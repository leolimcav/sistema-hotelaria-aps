const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init (sequelize) {
    super.init(
      {
        arrival_date: DataTypes.DATE,
        departure_date: DataTypes.DATE
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsToMany(models.Room, {
      foreignKey: 'client_id',
      through: 'bookings',
      as: 'rooms'
    });
    this.belongsToMany(models.Service, {
      foreignKey: 'client_id',
      through: 'client_services',
      as: 'services'
    });
    this.hasMany(models.Order, { foreignKey: 'client_id', as: 'orders' });
  }
}

module.exports = Client;
