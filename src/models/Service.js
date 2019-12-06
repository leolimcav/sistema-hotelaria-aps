const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        value: DataTypes.REAL
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
