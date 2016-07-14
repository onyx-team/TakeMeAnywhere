var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var uristring =
    process.env.MONGO_URI ||
    'mongodb://localhost/takeMeAnywhere';

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('connected suckas!')
})

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });

module.exports = app;