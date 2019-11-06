const request = require('supertest')
const faker = require('faker')
const bcrypt = require('bcryptjs')

const app = require('../../src/app')
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

describe('User CRUD', () => {
  describe('Creation', () => {
    beforeEach(async () => {
      await truncate()
    })

    it('should return status 200 if user have sent valid information', async () => {
      const response = await request(app)
        .post('/users')
        .send({
          name: faker.name.findName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          cpf: '12345678978',
          birthDate: '1999-01-07'
        })

      expect(response.status).toBe(200)
    })

    it('should return status 401 if user have not sent valid information', async () => {
      const response = await request(app)
        .post('/users')
        .send({
          name: faker.name.findName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          cpf: '12345678978'
        })

      expect(response.status).toBe(401)
    })
  })
})
