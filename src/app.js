require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
require('./database');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));

module.exports = app;
