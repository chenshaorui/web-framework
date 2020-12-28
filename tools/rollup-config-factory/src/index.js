const getRollupConfig = () => {
  return {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.bundle.js",
        format: "umd",
      },
    ],
  };
};

module.exports = {
  getRollupConfig,
};
