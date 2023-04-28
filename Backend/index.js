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
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.post('/MovieForm', async (req, res) => {
  const movieData = req.body;
  try {
    // Save the movieData to the database
    await collection.insertOne(movieData);

    // Send a success response back to the client
    res.status(200).json({ message: "Movie data saved successfully" });
  } catch (e) {
    // Send an error response back to the client
    res.status(500).json({ message: "An error occurred while saving movie data" });
  }
});


app.listen(8000, () => {
  console.log("Port connected");
});
