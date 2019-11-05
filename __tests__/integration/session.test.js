require('../../src/database/index')

const request = require('supertest')
const faker = require('faker')

const app = require('../../src/app')
const User = require('../../src/models/User')
const truncate = require('../util/truncate')

describe('Authorization', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: '12345678978',
      birth_date: '1999-01-07'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password
      })
    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: '12345678978',
      birth_date: '1999-01-07'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123'
      })
    expect(response.status).toBe(401)
  })
})
