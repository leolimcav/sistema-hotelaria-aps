const express = require('express')

const routes = express.Router()

routes.post('/sessions', (req, res) => {
  return res.status(200).send()
})

module.exports = routes
