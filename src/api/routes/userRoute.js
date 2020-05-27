module.exports = (server) => {
  const userController = require('../controllers/userController');

  server.route('/user/:user_id') //Ok
  .get(userController.get_a_user);

  server.route('/user/connection/:email/:password') //Marche pas
  .get(userController.connection);

  server.route('/user/inscription') //Ok
  .post(userController.create_a_user);

  server.route('/users') //Ok
  .get(userController.get_all_user);
}
