const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

const User = require("./models/user");
const Music = require("./models/music");
const Liked = require("./models/liked");
const Playlist = require("./models/playlist");

const JWT_SECRET = "fanjasdfnjdsfin75454584858#@$@$!%dnfjdnf92ldsmkbfhud09";

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
} catch (err) {
  console.log(err);
}

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("build", "index.html"));
  });
}

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.post("/delete-song-from-playlist", async (req, res) => {
  const { songId, playlistId } = req.body;

  try {
    await Playlist.updateOne(
      { _id: playlistId },
      {
        $pull: { songs: songId },
      }
    );
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/delete-playlist", async (req, res) => {
  const { token, id } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    await Playlist.deleteOne({ _id: id, ownerId });

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/add-song-to-playlist", async (req, res) => {
  const { token, id, playlistId } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;
    if (playlistId === undefined) {
      await Playlist.updateOne(
        { ownerId },
        {
          $push: { songs: id },
        }
      );
    } else {
      await Playlist.updateOne(
        { _id: playlistId, ownerId },
        {
          $push: { songs: id },
        }
      );
    }

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/get-playlists", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    const playlists = await Playlist.find({ ownerId }).lean();

    res.json(playlists);
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/create-playlist", async (req, res) => {
  const { token, playlistName } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;
    const ownerUsername = user.username;

    await Playlist.create({
      ownerId,
      ownerUsername,
      playlistName,
    });

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/get-username", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);

    res.json(user.username);
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/fetch-liked-songs", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    const liked = await Liked.findOne({ ownerId }).lean();

    res.json(liked.songs);
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/is-song-liked", async (req, res) => {
  const { token, songId } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    const liked = await Liked.findOne({ ownerId, songs: songId }).lean();
    if (liked === null) return res.json({ liked: false });
    else return res.json({ liked: true });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/remove-song-from-liked", async (req, res) => {
  const { token, songId } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    await Liked.updateOne(
      { ownerId },
      {
        $pull: { songs: songId },
      }
    );
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/add-song-to-liked", async (req, res) => {
  const { token, songId } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const ownerId = user.id;

    const liked = await Liked.findOne({ ownerId }).lean();
    if (liked === null) {
      await Liked.create({
        ownerId,
        songs: songId,
      });
      res.json({ status: "ok" });
    } else {
      await Liked.updateOne(
        { ownerId },
        {
          $push: { songs: songId },
        }
      );
      res.json({ status: "ok" });
    }
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/songs", async (req, res) => {
  try {
    const songs = await Music.find({}).lean();

    res.json(songs);
  } catch (err) {
    console.log(err);
  }
});

app.post("/send-data", async (req, res) => {
  const {
    token,
    username,
    email,
    date,
    password: plainTextPassword,
    gender,
  } = req.body;

  if (plainTextPassword === "") {
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const _id = user.id;

      await User.updateOne(
        { _id },
        {
          $set: { email, username, date, gender },
        }
      );

      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: error });
    }
  } else {
    const password = await bcrypt.hash(plainTextPassword, 10);
    const passwordLength = plainTextPassword.length;

    try {
      const user = jwt.verify(token, JWT_SECRET);
      const _id = user.id;

      await User.updateOne(
        { _id },
        {
          $set: { email, password, username, date, gender, passwordLength },
        }
      );

      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: error });
    }
  }
});

app.post("/get-account-data", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    const userData = await User.findOne({ _id }).lean();

    res.json({ status: "ok", data: userData });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/player", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    const userData = await User.findOne({ _id }).lean();

    res.json({ status: "ok", avatar: userData.image });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).lean();

    if (!user) {
      return res.json({
        status: "error",
        error: "Invalid username or password.",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET
      );

      return res.json({ status: "ok", data: token });
    }

    res.json({ status: "error", error: "Invalid username or password." });
  } catch (err) {
    res.json({ status: "error", error: `${err}` });
  }
});

app.post("/register", async (req, res) => {
  const {
    email,
    password: plainTextPassword,
    passwordLength,
    username,
    date,
    gender,
  } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    await User.create({
      email,
      password,
      username,
      date,
      gender,
      passwordLength,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        status: "error",
        error: `${JSON.stringify(error.keyValue)} already in use`,
      });
    }
    throw error;
  }

  res.json({ status: "ok" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
