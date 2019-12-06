const Service = require('../models/Service');

module.exports = {
  async index (req, res) {
    try {
      const services = await Service.findAll();

      return res.json(services);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { name, type, value } = req.body;
    try {
      const service = await Service.create({ name, type, value });

      return res.json(service);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { service_id } = req.params;
    const { name, type, value } = req.body;
    try {
      const service = await Service.findByPk(service_id);

      const updService = await service.update({ name, type, value });

      return res.json(updService);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { service_id } = req.params;
    try {
      const service = await Service.findByPk(service_id);

      await service.destroy();

      return res.json(service);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
