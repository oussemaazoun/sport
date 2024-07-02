const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: String,
  age: Number,
  position: String,
  nbr: Number,
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
