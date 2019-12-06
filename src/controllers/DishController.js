const Dish = require('../models/Dish');

module.exports = {
  async index (req, res) {
    const { dish_id } = req.params;
    try {
      const dish = await Dish.findByPk(dish_id, {
        include: {
          association: 'restaurant'
        }
      });

      return res.json(dish);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async findAll (req, res) {
    try {
      const dishes = await Dish.findAll({
        include: {
          association: 'restaurant'
        }
      });

      return res.json(dishes);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { rest_id } = req.params;
    const { name, value } = req.body;
    try {
      const dish = await Dish.create({
        name,
        value,
        restaurant_id: rest_id
      });

      return res.json(dish);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { dish_id } = req.params;
    const { name, value } = req.body;
    try {
      const plate = await Dish.findByPk(dish_id);
      const updDish = await plate.update({ name, value });

      return res.json(updDish);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { dish_id } = req.params;
    try {
      const dish = await Dish.findByPk(dish_id);

      await dish.destroy();

      return res.json(dish);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
