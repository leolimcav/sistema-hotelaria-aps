const { Model, DataTypes } = require('sequelize')

class Client extends Model {
  static init (sequelize) {
    super.init(
      {
        arrival_time: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Client
