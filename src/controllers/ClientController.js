const User = require('../models/User')
const Client = require('../models/Client')

module.exports = {
  async store (req, res) {
    const { userId } = req.params

    const user = await User.findByPk(userId)

    if (!user) {
      return res.json({ message: 'User not found' })
    }

    const client = await Client.create({
      user_id: userId
    })

    return res.status(200).json(client)
  }
}
