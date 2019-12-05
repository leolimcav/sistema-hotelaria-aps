const { Model, DataTypes } = require('sequelize');

class Dish extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.REAL
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
    this.belongsToMany(models.Order, {
      foreignKey: 'dish_id',
      through: 'order_details',
      as: 'orders'
    });
  }
}

module.exports = Dish;
