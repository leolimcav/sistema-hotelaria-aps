const express = require('express');
const multer = require('multer');

// const authMiddleware = require('./middleware/auth');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const ClientController = require('./controllers/ClientController');
const RecepcionistController = require('./controllers/RecepcionistController');
const RoomController = require('./controllers/RoomController');
const BookingController = require('./controllers/BookingController');
const RestaurantController = require('./controllers/RestaurantController');
const DishController = require('./controllers/DishController');
const OrderController = require('./controllers/OrderController');
const CartController = require('./controllers/CartController');
const ServiceController = require('./controllers/ServiceController');
const ClientServiceController = require('./controllers/ClientServiceController');

const routes = express.Router();

const upload = multer(uploadConfig);

// Users routes

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.destroy);

routes.get('/users/:user_id/address', AddressController.index);
routes.post('/users/:user_id/address', AddressController.store);
routes.put('/users/:user_id/addresses', AddressController.update);

// Clients routes

routes.get('/clients/:user_id', ClientController.index);
routes.post('/clients/:user_id', ClientController.store);

// Recepcionists routes
routes.post('/recepcionists/:user_id', RecepcionistController.store);

// Client Booking routes

routes.get('/clients/:client_id/bookings/', BookingController.index);
routes.get('/clients/:client_id/bookings/:room_id', BookingController.findOne);
routes.post('/clients/:client_id/bookings/:room_id', BookingController.store);
routes.delete(
  '/clients/:client_id/bookings/:room_id',
  BookingController.destroy
);

// Session route

routes.post('/sessions', SessionController.store);

// Rooms routes

routes.get('/rooms', RoomController.index);
routes.get('/rooms/available', RoomController.showRooms);
routes.get('/rooms/:room_id', RoomController.findOne);
routes.post('/rooms', upload.single('photo'), RoomController.store);
routes.put('/rooms/:room_id', RoomController.update);
routes.delete('/rooms/:room_id', RoomController.destroy);

// Restaurant routes

routes.get('/restaurants', RestaurantController.findAll);
routes.get('/restaurants/:rest_id', RestaurantController.index);
routes.post('/restaurants', RestaurantController.store);
routes.put('/restaurants/:rest_id', RestaurantController.update);
routes.delete('/restaurants/:rest_id', RestaurantController.destroy);

routes.post('/restaurants/:rest_id/dishes', DishController.store);
routes.put('/restaurants/dishes/:dish_id', DishController.update);
routes.delete('/restaurants/dishes/:dish_id', DishController.destroy);

// Orders routes

routes.get('/clients/orders/:order_id', OrderController.index);
routes.get('/clients/:client_id/orders', OrderController.findAll);
routes.post('/clients/:client_id/orders', OrderController.store);
routes.delete('/clients/orders/:order_id', OrderController.destroy);

// Cart routes

routes.get('/clients/orders/:order_id/dishes', CartController.index);
routes.post('/clients/orders/:order_id/dishes/:dish_id', CartController.store);
routes.put('/clients/orders/:order_id/dishes/:dish_id', CartController.update);
routes.delete(
  '/clients/orders/:order_id/dishes/:dish_id',
  CartController.destroy
);

// Services routes

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.store);
routes.put('/services/:service_id', ServiceController.update);
routes.delete('/services/:service_id', ServiceController.destroy);

// Client Service routes

routes.get('/clients/:client_id/services', ClientServiceController.index);
routes.post('/clients/:client_id/services', ClientServiceController.store);

// routes.use(authMiddleware);

module.exports = routes;
