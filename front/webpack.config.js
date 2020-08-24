module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../back/public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
