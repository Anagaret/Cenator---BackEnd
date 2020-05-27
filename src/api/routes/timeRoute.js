module.exports = (server) => {
  const timeController = require('../controllers/timeController');

  server.route('/project/:project_id/times')
  .get(timeController.get_all_time); // Ok

  server.route('/project/:project_id/:user_id/times')
  .get(timeController.get_user_time); // Ok

  server.route('/project/:project_id/add_time')
  .post(timeController.add_time); // Ok

  server.route('/:time_id/update')
  .put(timeController.update_time) // A voir
  .delete(timeController.delete_time); // Ok
}
