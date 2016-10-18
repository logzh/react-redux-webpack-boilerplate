var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var base = require('./webpack.base.config');
var templateConfig = require('./html.webpack.config.js').pro;
var HtmlWebpackPlugin = require('html-webpack-plugin');

for (var i = 0; i < templateConfig.length; i++) {
  base.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

var config = merge(base, {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://cdn.xxxx.com/xxdemo/' // 静态资源地址
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env.NODE_ENV': '"production"'
    })
  ]
});

module.exports = config;
