const user = require('../models/userModel');

exports.get_all_user = (req, res) => {
  user.find({}, (error, users) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(users);
    }
  })
};

exports.connection = (req, res) => {
  let email = req.params.mail;
  let pwd = req.params.password;
  User.findOne({email : email}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      if (user.password == pwd) {
        res.status(200);
        res.json(user);
      } else {
        res.status(500);
        res.json({message: "Permission denied"});
      }
    }
  })
};

exports.create_a_user = (req, res) => {
  let new_user = new user(req.body);
  new_user.save((error, user) => {
    if(error){
      res.status(500);
      console.log("a");
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(201);
      res.json(user);
    }
  })
};

exports.get_a_user = (req, res) => {
  let {user_id} = req.params;
  user.findById(user_id, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(user);
    }
  })
};

exports.set_password_user = (req, res) => {
  let {user_id} = req.params;
  user.findOne({_id : user_id}, (erreur, user) => {
    if (erreur) {
      res.status(500);
      console.log(erreur);
      res.json({message: "Erreur serveur."})
    } else {
      user.password = req.params.password;
      user.save();
      res.status(200);
      res.json(user);
    }
  })
};

exports.delete_one_user = (req, res) => {
  let {user_id} = req.params;
  user.remove({ _id : user_id}, (error, user) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(user);
    }
  })
};
