const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jamtsho:sangay@cinema.cupetj2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
