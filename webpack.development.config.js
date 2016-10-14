var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var base = require('./webpack.base.config');
var templateConfig = require('./html.webpack.config.js').dev;
var HtmlWebpackPlugin = require('html-webpack-plugin');

for (var i = 0; i < templateConfig.length; i++) {
  base.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

var config = merge(base, {
  output: {
    path: path.resolve(__dirname, './development'),
    publicPath: '/'
  },
  devtool: '#source-map'
});

module.exports = config;
