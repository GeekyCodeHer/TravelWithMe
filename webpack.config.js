//This configuration file will be utilized by webpack to build 
// the app and place the transpiled file into o/p folder using the modules with their rules
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      {
        test: /\.css$/i,
        use: [
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "src/"),
    publicPath: "/src/",
    filename: "app.js"
  },
  devServer: {
    port: 3000,
    hot: "only",
    devMiddleware: {
      publicPath: "http://localhost:3000/src/",
    },
    static: {
      directory: path.resolve(__dirname, "public/"),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};