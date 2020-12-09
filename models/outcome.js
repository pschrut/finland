const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let outcomeSchema = new Schema({
  date: {
    type: String
  },
  concept: {
    type: String
  },
  amount: {
    type: String
  }
});

module.exports = mongoose.model("Outcome", outcomeSchema);