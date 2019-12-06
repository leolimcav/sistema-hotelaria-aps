const { Model, DataTypes } = require('sequelize');

class Role extends Model {
  static init (sequelize) {
    super.init(
      {
        role_name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate (models) {
    this.hasOne(models.User, {
      foreignKey: 'role',
      as: 'user'
    });
  }
}

module.exports = Role;
