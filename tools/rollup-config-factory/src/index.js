const { babel } = require("@rollup/plugin-babel");

const getRollupConfig = () => {
  return {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.bundle.js",
        format: "umd",
      },
    ],
    plugins: [babel()],
  };
};

module.exports = {
  getRollupConfig,
};
