const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timeSchema = new Schema({
  user_id: {
    type: String,
    required: "L'id du user"
  },
  project_id: {
    type: String,
    required: "L'id du project"
  },
  name:{
    type: String,
    required: "Le nom de la tache est necessaire"
  },
  description: {
    type: String,
    required: "La desciption est necessaire"
  },
  timer_stop:{
    type: Boolean,
    Default: true
  },
  start_date: {
    type: Date
  },
  stop_date: {
    type: Date
  }
});

module.exports = mongoose.model('Time', timeSchema);
