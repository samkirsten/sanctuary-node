'use strict';
module.exports = function(app) {
  var incidentList = require('../controllers/incidentController');


  // incidentList Routes
  app.route('/incident')
    .get(incidentList.list_all_incidents)
    .post(incidentList.create_an_incident);


  app.route('/incident/:taskId')
    .get(incidentList.read_an_incident)
    .put(incidentList.update_an_incident)
    .delete(incidentList.delete_an_incident);

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
  });
};