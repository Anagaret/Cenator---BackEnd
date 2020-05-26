const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  firstname: {
    type: String,
    required: "Le prénom est requis"
  },
  password: {
    type: String,
    required: "Le mot de passe est requis"
  },
  email:{
    type: String,
    required: "L'email est requis"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
