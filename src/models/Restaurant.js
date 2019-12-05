const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.hasMany(models.Dish, { foreignKey: 'restaurant_id', as: 'dishes' });
  }
}

module.exports = Restaurant;
