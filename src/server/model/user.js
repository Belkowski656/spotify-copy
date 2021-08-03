const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    date: { type: Date, require: true },
    gender: { type: String, require: true },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
