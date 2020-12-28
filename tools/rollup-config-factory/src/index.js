const { babel } = require("@rollup/plugin-babel");
const typescript = require("@rollup/plugin-typescript");

const getRollupConfig = () => {
  return {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.bundle.js",
        format: "umd",
      },
    ],
    plugins: [typescript(), babel()],
  };
};

module.exports = {
  getRollupConfig,
};
