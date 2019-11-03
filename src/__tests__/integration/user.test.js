require('../../database')
const User = require('../../models/User')

describe('Register', () => {
  it('should create an User on database', async () => {
    const user = await User.create({
      name: 'Leonardo',
      email: 'leonardo@gmail.com',
      password: '123321',
      cpf: '61583091335',
      birth_date: '1999-01-07'
    })
    console.log(user)
    expect(user.name).toBe('Leonardo')
  })
})
