const Group = require('../models/groupModel');

//Add
exports.create_a_group = (req, res) => {
  let new_group = new Group(req.body);

  new_group.save((error, group) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(201);
      res.json(group);
    }
  })
}

//Read All
exports.list_all_group = (req, res) => {
  Group.find({}, (error, groups) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(groups);
    }
  })
}

//Read One
exports.get_a_group = (req, res) => {
  // let post_id = req.params.post_id;
  let {group_id} = req.params;

  // Post.findOne({_id : post_id}, (error, posts) => {
  Group.findById(group_id, (error, group) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(group);
    }
  })
}

//Update One
exports.set_a_group = (req, res) => {
  let {group_id} = req.params;
  Group.findOne({_id : group_id}, (erreur, group) => {
    if (erreur) {
      res.status(500);
      console.log(erreur);
      res.json({message: "Erreur serveur."})
    } else {
      group.save();
      res.status(200);
      res.json(group);
    }
  })
}

//Delete One
exports.delete_a_group = (req, res) => {
  let {group_id} = req.params;
  Group.remove({ _id : group_id}, (error, group) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(group);
    }
  })
};

//Voir si utile pour une amélioration
/*
exports.get_top_six_song = (req, res) => {
  Song.find({}, (error, song) => {
    if(error){
      res.status(501);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(song);
    }
  }).sort(
      {vote_plus : -1}
      ).limit(6)
};
*/
