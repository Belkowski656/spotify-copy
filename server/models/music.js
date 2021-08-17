const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    title: { type: String, require: true },
    image: { type: String, require: true },
    author: { type: String, require: true },
  },
  { collection: "musics" }
);

const model = mongoose.model("MusicSchema", MusicSchema);

module.exports = model;
