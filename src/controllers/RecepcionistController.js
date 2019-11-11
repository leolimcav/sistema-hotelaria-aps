const User = require('../models/User')
const Recepcionist = require('../models/Recepcionist')

module.exports = {
  async store (req, res) {
    const { userId } = req.params
    const { salary, shift } = req.body

    const user = await User.findByPk(userId)

    if (!user) {
      return res.json({ message: 'User not found' })
    }

    const recepcionist = await Recepcionist.create({
      salary,
      shift,
      user_id: userId
    })

    return res.status(200).json(recepcionist)
  }
}
