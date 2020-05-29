module.exports = (server) => {
  const projectController = require('../controllers/projectController');

 server.route('/projects') // req.params.song_id
 .get(projectController.list_all_project) // Ok
 .post(projectController.create_a_project); // Ok

 server.route('/project/:project_id') // req.params.song_id
 .get(projectController.get_project) // Ok
 .put(projectController.update_project) // Ne fonctionne pas
 .delete(projectController.delete_project); // Ok
}
