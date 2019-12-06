const User = require('../models/User');
const Recepcionist = require('../models/Recepcionist');

module.exports = {
  async store (req, res) {
    const { user_id } = req.params;
    const { salary, shift } = req.body;

    try {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.json({ message: 'User not found' });
      }

      const recepcionist = await Recepcionist.create({
        salary,
        shift,
        user_id
      });

      return res.status(200).json(recepcionist);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
