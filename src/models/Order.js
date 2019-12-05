const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init (sequelize) {
    super.init(
      {
        order_date: DataTypes.DATEONLY
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsToMany(models.Dish, {
      foreignKey: 'order_id',
      through: 'order_details',
      as: 'dishes'
    });
  }
}

module.exports = Order;
