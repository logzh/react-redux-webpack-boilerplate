var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var base = require('./webpack.base.config');
var templateConfig = require('./html.webpack.config.js').pro;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[hash].js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

for (var i = 0; i < templateConfig.length; i++) {
  base.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

var config = merge(base, {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: 'http://cdn.xxxx.com/xxdemo/' // 静态资源地址
  },
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env.NODE_ENV': '"production"'
    })
  ]
});

module.exports = config;
