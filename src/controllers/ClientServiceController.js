const Client = require('../models/Client');

module.exports = {
  async index (req, res) {
    try {
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { client_id } = req.params;
    const { services } = req.body;
    try {
      const client = await Client.findByPk(client_id);

      if (!client) {
        return res.json({ msg: 'User not found!' });
      }

      await client.addServices(services);

      const service = await client.getServices();

      return res.json(service);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
