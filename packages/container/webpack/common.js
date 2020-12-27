const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const packageDir = path.resolve(__dirname, "..");

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", "jsx", "tsx"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(packageDir, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
