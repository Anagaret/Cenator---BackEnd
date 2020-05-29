const Time = require('../models/timeModel');

// Read All in One Project
exports.get_all_time = (req, res) => {
  Time.find({project_id: req.params.project_id}, (error, time) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(time);
    }
  })
}

exports.get_user_time = (req, res) => {
  Time.find({project_id: req.params.project_id, user_id: req.params.user_id}, (error, time) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(time);
    }
  })
}

// Read All
exports.get_all_t = (req, res) => {
  Time.find({}, (error, time) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(time);
    }
  })
}

// Add One
exports.add_time = (req, res) => {
  let new_time = new Time(req.body);
  new_time.project_id = req.params.project_id;

  new_time.save((error, time) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(time);
    }
  })
}

// Update One
exports.update_time = (req, res) => {
  let {time_id} = req.params;
  Time.update({ _id : time_id}, (error, time) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(time);
    }
  })
};

// Delete One
exports.delete_time = (req, res) => {
  let {time_id} = req.params;
  Time.remove({ _id : time_id}, (error, time) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    } else {
      res.status(200);
      res.json(time);
    }
  })
};
