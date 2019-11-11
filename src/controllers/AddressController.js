const User = require('../models/User')
const Address = require('../models/Address')

module.exports = {
  async index (req, res) {
    const { userId } = req.params
    const user = await User.findByPk(userId, {
      include: { association: 'address' }
    })

    return res.status(200).json(user)
  },

  async store (req, res) {
    const { userId } = req.params
    const { street, number, city, state, zipCode } = req.body

    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    const address = await Address.create({
      street,
      number,
      city,
      state,
      zip_code: zipCode,
      user_id: userId
    })
    return res.json(address)
  },

  async update (req, res) {
    const { id, street, number, city, state, zipCode } = req.body
    const address = await Address.findByPk(id)
    address.update({
      street,
      number,
      city,
      state,
      zip_code: zipCode
    })
    return res.status(200).json(address)
  }
}
