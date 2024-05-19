const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.1:27017/backenddb");

const userSchema = mongoose.Schema({

  username: String,
  name: String,
  age: Number

})

module.exports = mongoose.model("user", userSchema);


