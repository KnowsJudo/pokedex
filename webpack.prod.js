const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config();
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "./index.html",
      template: "./src/client/views/index.html",
    }),
  ],
  output: {
    library: "Client",
    libraryTarget: "var",
    path: path.resolve(__dirname, "dist"),
  },
};
