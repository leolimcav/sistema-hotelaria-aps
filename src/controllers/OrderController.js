const Order = require('../models/Order');
const Client = require('../models/Client');

module.exports = {
  async index (req, res) {
    const { order_id } = req.params;
    try {
      const order = await Order.findByPk(order_id, {
        include: {
          association: 'dishes'
        }
      });

      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async findAll (req, res) {
    const { client_id } = req.params;
    try {
      const client = await Client.findByPk(client_id, {
        include: {
          association: 'orders'
        }
      });

      if (!client) {
        return res.json({ msg: 'User not found!' });
      }

      return res.json(client);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { client_id } = req.params;
    const { order_date } = req.body;
    try {
      const client = await Client.findByPk(client_id);

      if (!client) {
        return res.json({ msg: 'User not found!' });
      }

      const order = await Order.create({
        order_date,
        client_id
      });

      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { order_id } = req.params;
    try {
      const order = await Order.findByPk(order_id);
      await order.destroy();

      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
