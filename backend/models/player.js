const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: String,
  age: Number,
  pos: String,
  nbr: Number,
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
