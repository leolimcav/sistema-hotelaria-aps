const { Model, DataTypes } = require('sequelize');

class Booking extends Model {
  static init (sequelize) {
    super.init(
      {
        booking_date: DataTypes.DATEONLY
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Booking;
