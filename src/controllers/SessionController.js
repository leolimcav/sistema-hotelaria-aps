const User = require('../models/User');

module.exports = {
  async store (req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.json({ error: 'An error ocurred!' });
    }
  }
};
