module.exports = (server) => {
  const projectController = require('../controllers/projectController');

 server.route('/projects') // req.params.song_id
 .get(projectController.list_all_project)
 .post(projectController.create_a_project);
}
