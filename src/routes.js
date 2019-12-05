const express = require('express');

// const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const ClientController = require('./controllers/ClientController');
const RecepcionistController = require('./controllers/RecepcionistController');
const RoomController = require('./controllers/RoomController');
const BookingController = require('./controllers/BookingController');

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

routes.get('/rooms/all', RoomController.index);
routes.get('/rooms', RoomController.showRooms);
routes.post('/rooms', RoomController.store);
routes.put('/rooms/:room_id', RoomController.update);
routes.delete('/rooms/:room_id', RoomController.destroy);

// routes.use(authMiddleware);

module.exports = routes;
