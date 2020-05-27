module.exports = (server) => {
  const groupController = require('../controllers/groupController');

  server.route('/groups')
  .get(groupController.list_all_group) //Ok
  .post(groupController.create_a_group); //Ok

 server.route('/groups/:group_id') // req.params.group_id
 .get(groupController.get_a_group) //Ok
 .delete(groupController.delete_a_group); //Ok

/* server.route('/top/songs')
 .get(songController.get_top_six_song);

// A modifier lorsque le front sera MAJ
 server.route('/songs/:song_id/:vote')
 .put(songController.set_a_song);*/

}
