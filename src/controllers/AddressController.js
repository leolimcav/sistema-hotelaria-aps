const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
  async index (req, res) {
    const { user_id } = req.params;

    try {
      const user = await User.findByPk(user_id, {
        include: { association: 'address' }
      });

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { user_id } = req.params;
    const { street, number, city, state, zip_code } = req.body;

    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      const address = await Address.create({
        street,
        number,
        city,
        state,
        zip_code,
        user_id
      });
      return res.json(address);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { id, street, number, city, state, zip_code } = req.body;
    try {
      const address = await Address.findByPk(id);
      address.update({
        street,
        number,
        city,
        state,
        zip_code
      });
      return res.status(200).json(address);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
