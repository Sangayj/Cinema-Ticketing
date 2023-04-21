const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({
      email: email,
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

app.post("/SignIn", async (req, res) => {
  const { name, gender, email, password } = req.body;

  const data = {
    name: name,
    gender: gender,
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });
    if (check) {
      return res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.listen(8000, () => {
  console.log("Port connected");
});
