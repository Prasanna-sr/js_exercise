var path = require('path');
var webpack = require('webpack');
// asdsa
module.exports = {
  entry: [path.join(__dirname, './hello.js')],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-3']
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
