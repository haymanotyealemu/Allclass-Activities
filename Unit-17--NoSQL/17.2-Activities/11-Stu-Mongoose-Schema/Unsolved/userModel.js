const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username:{
    type: String,
    required: "username is required",
    trim: true
  },
  password:{
    type: String,
    required: "password is required",
    trim: true,
    minlength: [6, "password must be minimum of 6 character"]
  },
  email:{
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true
  },
  userCreated:{
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
