const path = require("path");

module.exports = {
  entry: "./bin/core.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "core.js",
  },
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
