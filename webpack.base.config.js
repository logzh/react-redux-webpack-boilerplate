var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: entry,
  output: {
    filename: 'static/js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], // 配置可以不书写的后缀名
    root: path.resolve(__dirname, 'app/') // 配置绝对路径，alias、entry中会使用
  },
  externals: {
    'wx': true
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url?limit=1024&name=static/images/[hash].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      }
    ]
  },
  plugins: [

  ]
};

module.exports = config;
