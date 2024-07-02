const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: Number,
  pwd: Number,
});

const user = mongoose.model("User", userSchema);
module.exports = user;
