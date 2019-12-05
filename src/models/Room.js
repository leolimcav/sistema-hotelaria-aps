const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static init (sequelize) {
    super.init(
      {
        value: DataTypes.REAL,
        type: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Room;
