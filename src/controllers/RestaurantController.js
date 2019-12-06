const Restaurant = require('../models/Restaurant');

module.exports = {
  async index (req, res) {
    const { rest_id } = req.params;
    try {
      const restaurant = await Restaurant.findByPk(rest_id, {
        include: {
          association: 'dishes'
        }
      });

      return res.json(restaurant);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async findAll (req, res) {
    try {
      const restaurants = await Restaurant.findAll();

      return res.json(restaurants);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { name } = req.body;
    try {
      const restaurant = await Restaurant.create({ name });

      return res.json(restaurant);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { rest_id } = req.params;
    const { name } = req.body;
    try {
      const restaurant = await Restaurant.findByPk(rest_id);
      const updRest = await restaurant.update({ name });

      return res.json(updRest);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { rest_id } = req.params;
    try {
      const restaurant = await Restaurant.findByPk(rest_id);
      await restaurant.destroy();
      return res.json(restaurant);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
