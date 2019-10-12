const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/database')

dotenv.config()

const app = express()

db.authenticate()
  .then(() => {
    console.log('Connection stablished')
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err)
  })

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na port ${process.env.PORT}`)
})
