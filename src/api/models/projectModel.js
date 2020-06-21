const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  title: {
    type: String,
    required: "Le titre est requis"
  },
  description: {
    type: String,
    default: ""
  },
  group_id: {
    type: String,
    required: "Le group est requis"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);
