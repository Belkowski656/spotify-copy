const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./model/user");

const JWT_SECRET = "fanjasdfnjdsfin75454584858#@$@$!%dnfjdnf92ldsmkbfhud09";

mongoose.connect("mongodb://localhost:27017/spotify-copy-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

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
    username,
    date,
    gender,
  } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      email,
      password,
      username,
      date,
      gender,
    });

    console.log("Success", response);
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
