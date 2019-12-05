const User = require('../models/User');

module.exports = {
  async index (req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },
  async store (req, res) {
    const { name, email, password, rg, cpf, birth_date } = req.body;
    try {
      const hasUser = await User.findOne({ where: { email } });

      if (hasUser) {
        return res.json({ msg: 'Email already in use!' });
      }

      const user = await User.create({
        name,
        email,
        password,
        rg,
        cpf,
        birth_date
      });
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: 'Invalid user information' });
    }
  },

  async update (req, res) {
    const { user_id } = req.params;
    const { name, email, password, rg, cpf, birth_date } = req.body;
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.update({ name, email, password, rg, cpf, birth_date });
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },
  async destroy (req, res) {
    const { user_id } = req.params;
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await user.destroy();
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.json({ msg: 'An error ocurred!' });
    }
  }
};
