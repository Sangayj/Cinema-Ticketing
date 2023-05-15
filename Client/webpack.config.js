module.exports = {
  // Other webpack configuration options...

  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
};
