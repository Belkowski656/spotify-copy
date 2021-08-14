const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema(
  {
    ownerId: { type: String, require: true },
    ownerUsername: { type: String, require: true },
    playlistName: { type: String, require: true },
    image: { type: String, require: true, default: "playlist.png" },
    songs: [],
  },
  { collection: "playlists" }
);

const model = mongoose.model("PlaylistSchema", PlaylistSchema);

module.exports = model;
