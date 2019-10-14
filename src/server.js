const express = require('express')
const db = require('./models/index')

const app = express()
db.authenticate()
  .then(() => {
    console.log('Connection stablished')
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err)
  })

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333')
})
