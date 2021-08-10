const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uuid = require("uuid").v4;

const User = require("./models/user");

const JWT_SECRET = "fanjasdfnjdsfin75454584858#@$@$!%dnfjdnf92ldsmkbfhud09";

mongoose.connect("mongodb://localhost:27017/spotify-copy-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    cb(null, "./src/resources/images/avatars");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    const fileName = `${uuid()}_${originalname}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("avatar"), async (req, res) => {
  const image = req.file.filename;
  const token = req.body.token;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    await User.updateOne(
      { _id },
      {
        $set: { image },
      }
    );
    res.redirect("/account");
  } catch (error) {
    res.end({ status: "error", error: error });
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
