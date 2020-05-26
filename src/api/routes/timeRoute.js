module.exports = (server) => {
  const timeController = require('../controllers/timeController');

  server.route('/:project_id/times')
  .get(timeController.get_all_time);

  server.route('/:project_id/:user_id/times')
  .get(timeController.get_user_time);

  server.route('/:project_id/:user_id/AddTime')
  .post(timeController.add_time);

  server.route('/:time_id/update')
  .put(timeController.update_time)
  .delete(timeController.delete_time);
}
