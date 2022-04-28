const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: "url-loader?limit=200000",
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
    ],
  },
});
