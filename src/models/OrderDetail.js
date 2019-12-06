const { Model, DataTypes } = require('sequelize');

class OrderDetail extends Model {
  static init (sequelize) {
    super.init(
      {
        qty: DataTypes.INTEGER,
        unit_value: DataTypes.REAL
      },
      {
        sequelize
      }
    );
  }
}

module.exports = OrderDetail;
