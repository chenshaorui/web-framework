const { merge } = require("webpack-merge");

const commonConfigs = require("./common");

module.exports = merge(commonConfigs, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    open: true,
  },
  devtool: "source-map",
});
