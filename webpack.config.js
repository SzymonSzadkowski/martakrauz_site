const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UnusedWebpackPlugin = require("unused-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 3000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.ttf$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, "src")],
    }),
  ],
  output: {
    path: __dirname + "dist",
    filename: "[name].bundle.js",
  },
};
