const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    year: { type: String },
    genres: { type: Array },
    ratings: { type: Array },
    poster: {
      type: String,
      default: "https://www.companyfolders.com/blog/media/2017/07/jaws.jpg",
    },
    contentRating: { type: String, default: "" },
    duration: { type: String, default: "" },
    releaseDate: { type: String, default: "" },
    averageRating: { type: Number, default: 0 },
    originalTitle: { type: String, default: "" },
    storyLine: { type: String, default: "" },
    actors: { type: Array },
    imdbRating: { type: String },
    posterurl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
