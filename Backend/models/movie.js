const { timeStamp } = require("console");
const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actor: {
      type: String,
      required: true,
    },
    actress: {
      type: String,
      required: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      url: { type: String, required: true },
      public_id: { type: String, required: true },
      required: true,
    },
    trailer: {
      type: String,
      url: { type: String, required: true },
      public_id: { type: String, required: true },
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
