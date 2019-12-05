const User = require('../models/User');
const Client = require('../models/Client');

module.exports = {
  async index (req, res) {
    const { user_id } = req.params;
    try {
      const client = await User.findByPk(user_id, {
        include: [{ association: 'client' }, { association: 'address' }]
      });

      return res.json(client);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { user_id } = req.params;
    const { arrival_date, departure_date } = req.body;
    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.json({ message: 'User not found' });
      }

      const client = await Client.create({
        arrival_date,
        departure_date,
        user_id
      });

      return res.status(200).json(client);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
