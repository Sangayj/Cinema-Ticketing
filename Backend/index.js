const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const check = await collection.findOne({
      username: username,
      password: password,
    });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.post("/Signup", async (req, res) => {
  const { name, username, gender, email, phone, password, confirmPassword } =
    req.body;

  const data = {
    name: name,
    username: username,
    gender: gender,
    email: email,
    phone: phone,
    password: password,
    confirmPassword: confirmPassword,
  };

  try {
    const check = await collection.findOne({
      username: username,
    });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {}
});

app.listen(8000, () => {
  console.log("Port connected");
});
