'use strict';


var mongoose = require('mongoose'),
  Incident = mongoose.model('Incident');

exports.list_all_incidents = function(req, res) {
  Incident.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_an_incident = function(req, res) {
  var new_incident = new Incident(req.body);
  new_incident.save(function(err, incident) {
    if (err)
      res.send(err);
    res.json(incident);
  });
};


exports.read_an_incident = function(req, res) {
  Incident.findById(req.params.incidentId, function(err, incident) {
    if (err)
      res.send(err);
    res.json(incident);
  });
};


exports.update_an_incident = function(req, res) {
  Incident.findOneAndUpdate(req.params.incidentId, req.body, {new: true}, function(err, incident) {
    if (err)
      res.send(err);
    res.json(incident);
  });
};


exports.delete_an_incident = function(req, res) {


  Incident.remove({
    _id: req.params.incidentId
  }, function(err, incident) {
    if (err)
      res.send(err);
    res.json({ message: 'Incident successfully deleted' });
  });
};


