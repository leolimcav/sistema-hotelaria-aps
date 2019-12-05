const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        rg: DataTypes.STRING(11),
        cpf: DataTypes.STRING(11),
        birth_date: DataTypes.DATEONLY
      },
      {
        hooks: {
          beforeSave: async user => {
            if (user.password) {
              user.password_hash = await bcrypt.hash(user.password, 8);
            }
          }
        },
        sequelize
      }
    );
  }

  static associate (models) {
    this.hasOne(models.Address, { foreignKey: 'user_id', as: 'address' });
    this.hasOne(models.Client, { foreignKey: 'user_id', as: 'client' });
    this.hasOne(models.Recepcionist, {
      foreignKey: 'user_id',
      as: 'recepcionist'
    });
  }
}

User.prototype.checkPassword = function (password) {
  return bcrypt.compare(password, this.password_hash);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET);
};

module.exports = User;
