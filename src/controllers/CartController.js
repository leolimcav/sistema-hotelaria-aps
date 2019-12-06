const Order = require('../models/Order');
const Dish = require('../models/Dish');

module.exports = {
  async index (req, res) {
    const { order_id } = req.params;
    try {
      const cart = await Order.findByPk(order_id, {
        include: { association: 'dishes' },
        attributes: []
      });

      return res.json(cart);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async store (req, res) {
    const { order_id, dish_id } = req.params;
    const { qty } = req.body;
    try {
      const order = await Order.findByPk(order_id);
      const dish = await Dish.findByPk(dish_id);

      await order.addDishes(dish_id, {
        through: { qty, unit_value: dish.value }
      });

      const cart = await order.getDishes();

      return res.json(cart);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async update (req, res) {
    const { order_id, dish_id } = req.params;
    const { qty } = req.body;
    try {
      const order = await Order.findByPk(order_id);
      const dish = await Dish.findByPk(dish_id);

      await order.setDishes(dish_id, {
        through: { qty, unit_value: dish.value }
      });

      const cart = await order.getDishes();

      return res.json(cart);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  },

  async destroy (req, res) {
    const { order_id, dish_id } = req.params;
    try {
      const order = await Order.findByPk(order_id);

      await order.removeDishes(dish_id);

      const cart = await order.getDishes();

      return res.json(cart);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
