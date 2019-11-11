const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Address = require('../models/Address')
const Client = require('../models/Client')
const Recepcionist = require('../models/Recepcionist')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Client.init(connection)
Recepcionist.init(connection)

Address.associate(connection.models)
User.associate(connection.models)
Client.associate(connection.models)
Recepcionist.associate(connection.models)

module.exports = connection
