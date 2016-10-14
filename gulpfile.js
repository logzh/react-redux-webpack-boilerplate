var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var webpackConfigProduct = require('./webpack.production.config.js');
var webpackConfigDevelop = require('./webpack.development.config.js');
var srcJsDir = './app/js/';

gulp.task('webpack', function(callback) {
  webpack(webpackConfigProduct, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('webpackDevelop', function(callback) {
  webpack(webpackConfigDevelop, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('default', ['webpack']);

gulp.task('dev', ['webpackDevelop']);
