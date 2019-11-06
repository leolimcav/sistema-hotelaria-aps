const express = require('express')

const authMiddleware = require('./middleware/auth')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.store)
routes.use(authMiddleware)
routes.get('/dashboard', (req, res) => {
  res.status(200).send()
})

module.exports = routes
