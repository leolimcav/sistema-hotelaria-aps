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
    const { client_id, service_id } = req.params;
    try {
      const client = await Client.findByPk(client_id);

      if (!client) {
        return res.json({ msg: 'User not found!' });
      }

      await client.addServices(service_id);

      const services = await client.getServices();

      return res.json(services);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
