const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Client = require('../models/Client');
const Recepcionist = require('../models/Recepcionist');
const Room = require('../models/Room');
const Restaurant = require('../models/Restaurant');
const Dish = require('../models/Dish');
const Order = require('../models/Order');
const Service = require('../models/Service');
const OrderDetail = require('../models/OrderDetail');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Client.init(connection);
Recepcionist.init(connection);
Room.init(connection);
Restaurant.init(connection);
Dish.init(connection);
Order.init(connection);
Service.init(connection);
OrderDetail.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Client.associate(connection.models);
Recepcionist.associate(connection.models);
Room.associate(connection.models);
Restaurant.associate(connection.models);
Dish.associate(connection.models);
Order.associate(connection.models);
Service.associate(connection.models);

module.exports = connection;
