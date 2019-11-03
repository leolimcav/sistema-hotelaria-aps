const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) => {
  return res.json({ msg: 'Hello World' })
})

module.exports = routes
