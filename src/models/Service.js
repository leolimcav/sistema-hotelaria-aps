const { Model, DataTypes } = require('sequelize');

class Service extends Model {
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
    this.belongsToMany(models.Client, {
      foreignKey: 'service_id',
      through: 'client_services',
      as: 'clients'
    });
  }
}

module.exports = Service;
