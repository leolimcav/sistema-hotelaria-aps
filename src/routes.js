const express = require('express')

const authMiddleware = require('./middleware/auth')

const SessionController = require('./controllers/SessionController')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:userId', UserController.update)
routes.delete('/users/:userId', UserController.destroy)

routes.get('/users/:userId/address', AddressController.index)
routes.post('/users/:userId/address', AddressController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => {
  res.status(200).send()
})

module.exports = routes
