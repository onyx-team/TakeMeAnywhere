var express = require('express');
var mongoose = require('mongoose');
var axios = require('axios');
var cors = require('cors');

var app = express();
// app.use(cors());
require('./config/middleware')(app, express);
require('./config/routes')(app, express);

// var uristring =
//     process.env.MONGO_URI ||
//     'mongodb://localhost/takeMeAnywhere';

// mongoose.connect(uristring, function (err, res) {
//       if (err) {
//       console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//       } else {
//       console.log ('Succeeded connected to: ' + uristring);
//       }
//     });

var port = process.env.PORT || 3000;


app.listen(port, function() {
  console.log('connected suckas!')
})



module.exports = app;