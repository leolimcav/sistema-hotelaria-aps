require('../../src/database/index')

const bcrypt = require('bcryptjs')
const User = require('../../src/models/User')
const truncate = require('../util/truncate')

describe('User', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Leonardo',
      email: 'leonardo@gmail.com',
      password: '123321',
      cpf: '61583091335',
      birth_date: '1999-01-07'
    })

    const compareHash = await bcrypt.compare(user.password, user.password_hash)

    expect(compareHash).toBe(true)
  })
})
