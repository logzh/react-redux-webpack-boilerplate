var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.config');
var templateConfig = require('./html.webpack.config.js').dev;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

for (prop in base.entry) {
  base.entry[prop].unshift('webpack-dev-server/client?http://localhost:8080');
  base.entry[prop].unshift('webpack/hot/dev-server');
}

for (var i = 0; i < templateConfig.length; i++) {
  base.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

var config = merge(base, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    stats: 'error-only',
    port: 8080,
    proxy: {//请求后端数据
      '/cgi/*': 'http://localhost:3000/'
    }
  },
  output: {
    publicPath: '/',
    filename: 'static/js/[name].js'
  },
  devtool: '#source-map',
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
