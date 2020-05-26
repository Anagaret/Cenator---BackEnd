const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  creator_user_id: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur"
  },
  user_id_2: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur",
    default: null
  },
  user_id_3: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur",
    default: null
  },
  user_id_4: {
    type: String,
    required: "Veuillez renseigner votre nom d'utilisateur",
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Group', groupSchema);
