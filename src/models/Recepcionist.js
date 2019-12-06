const { Model, DataTypes } = require('sequelize')

class Recepcionist extends Model {
  static init (sequelize) {
    super.init(
      {
        salary: DataTypes.REAL,
        shift: DataTypes.DATE
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

module.exports = Recepcionist
