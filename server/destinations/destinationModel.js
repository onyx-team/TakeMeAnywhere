var mongoose = require('mongoose');

var DestinationSchema = new mongoose.Schema({
  location: String,
  trip_date: Date,
},{
  timestamps: true
})