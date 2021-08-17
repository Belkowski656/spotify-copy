const mongoose = require("mongoose");

const LikedSchema = new mongoose.Schema(
  {
    ownerId: { type: String, require: true },
    songs: [],
  },
  { collection: "liked" }
);

const model = mongoose.model("LikedSchema", LikedSchema);

module.exports = model;
