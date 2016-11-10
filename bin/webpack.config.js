const path = require("path");
const webpack = require("webpack");

const config = {
  entry: ['./static/build/self/main.js'],
  output: {
    path: path.join(__dirname, 'static/build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  plugins: []
};

config.entry.push("webpack-hot-middleware/client");

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
