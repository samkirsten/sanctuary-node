'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  radius: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Incident', IncidentSchema);