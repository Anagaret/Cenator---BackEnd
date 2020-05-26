const Project = require('../models/projectModel');

exports.list_all_project = (req, res) => {
  Project.find({song_id: req.params.song_id}, (error, projects) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(projects)
    }
  })
}

exports.create_a_project = (req, res) => {
  let new_project = new Project(req.body);
  new_project.post_id = req.params.song_id;

  new_project.save((error, project) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(project);
    }
  })
}

exports.get_a_project = (req, res) => {
  Project.findById(req.params.project_id, (error, project) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(project)
    }
  })
}
