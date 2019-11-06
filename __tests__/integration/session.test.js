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

  it('should not authenticate with invalid email', async () => {
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
        email: 'emailai@gmail.com',
        password: user.password
      })
    expect(response.status).toBe(401)
  })

  it('should not authenticate with invalid password', async () => {
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

  it('should return jwt token when authenticated', async () => {
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

    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await User.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: '12345678978',
      birth_date: '1999-01-07'
    })

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', 'Bearer 123321')

    expect(response.status).toBe(401)
  })

  it('should not be able to access private routes without jwt token', async () => {
    const response = await request(app).get('/dashboard')

    expect(response.status).toBe(401)
  })
})
