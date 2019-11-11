const User = require('../models/User')

module.exports = {
  async index (req, res) {
    const users = await User.findAll()
    return res.status(200).json(users)
  },
  async store (req, res) {
    const { name, email, password, cpf, birthDate } = req.body
    try {
      const user = await User.create({
        name,
        email,
        password,
        cpf,
        birth_date: birthDate
      })
      return res.status(200).json(user)
    } catch (err) {
      return res.status(401).json({ message: 'Invalid user information' })
    }
  },

  async update (req, res) {
    const { userId } = req.params
    const { name, email, password, cpf, birthDate } = req.body
    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    await user.update({ name, email, password, cpf, birth_date: birthDate })
    return res.status(200).json(user)
  },
  async destroy (req, res) {
    const { userId } = req.params
    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    await user.destroy()
    return res.status(200).json(user)
  }
}
