const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        cpf: DataTypes.STRING(11),
        birth_date: DataTypes.DATEONLY,
        address: DataTypes.INTEGER
      },
      { sequelize }
    )
  }
}

module.exports = User
