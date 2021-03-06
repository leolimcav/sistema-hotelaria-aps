const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static init (sequelize) {
    super.init(
      {
        value: DataTypes.REAL,
        type: DataTypes.STRING,
        availability: DataTypes.STRING,
        photo: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.belongsToMany(models.Client, {
      foreignKey: 'room_id',
      through: models.Booking,
      as: 'client'
    });
  }
}

module.exports = Room;
