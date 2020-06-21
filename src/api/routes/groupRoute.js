module.exports = (server) => {
  const groupController = require('../controllers/groupController');

  server.route('/groups')
  .get(groupController.list_all_group) //Ok
  .post(groupController.create_a_group); //Ok

 server.route('/groups/:group_id') // req.params.group_id
 .get(groupController.get_a_group) //Ok
 .put(groupController.update_group) // Ne fonctionne pas
 .delete(groupController.delete_a_group); //Ok

 server.route('/groups/:user_id')
 .get(groupController.get_all_user_group);
}
