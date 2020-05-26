const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timeSchema = new Schema({
  user_id: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur"
  },
  project_id: {
    type: String,
    required: "Quel est le titre de ce morceau ?"
  },
  description: {
    type: String,
    required: "La desciption est necessaire"
  },
  timer_stop:{
    type: Boolean,
    Default: True
  },
  timer: {
    type: Date
  }
});

module.exports = mongoose.model('Time', timeSchema);
