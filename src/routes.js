const express = require('express');

// const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const ClientController = require('./controllers/ClientController');
const RecepcionistController = require('./controllers/RecepcionistController');
const RoomController = require('./controllers/RoomController');
const BookingController = require('./controllers/BookingController');
const RestaurantController = require('./controllers/RestaurantController');
const DishController = require('./controllers/DishController');

const routes = express.Router();

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
routes.post('/rooms', RoomController.store);
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

// routes.use(authMiddleware);

module.exports = routes;
