const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
// app.use(cors());
require('./config/middleware')(app, express);
require('./config/routes')(app, express);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);
}

app.listen(port, function() {
  console.log('connected suckas!')
})



module.exports = app;