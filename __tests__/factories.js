const faker = require('faker')
const factory = require('factory-girl')
const User = require('../src/models/User')

const userFactory = factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  cpf: '12345678978',
  birth_date: '1999-01-07'
})

module.exports = userFactory
