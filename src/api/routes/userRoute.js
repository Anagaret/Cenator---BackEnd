module.exports = (server) => {
  const userController = require('../controllers/userController');

  server.route('/user/:user_id') //Ok
  .get(userController.get_a_user)
  .put(userController.update_user); // Ne fonctionne pas

  server.route('/user/inscription') //Ok
  .post(userController.create_a_user);

  server.route('/users') //Ok
  .get(userController.get_all_user);
}
