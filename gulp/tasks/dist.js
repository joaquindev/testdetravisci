'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('dist', function () {
  return gulp.src('src/backbone.free.js')
    .pipe(webpack({
      output: {
        filename: 'backbone.freeDIST.js',
        libraryTarget: 'umd'
      },
      externals: {
        backbone: {
        amd: 'backbone',
        commonjs: 'backbone',
        commonjs2: 'backbone',
        root: 'Backbone'
      },
      underscore: {
        amd: 'underscore',
        commonjs: 'underscore',
        commonjs2: 'underscore',
        root: '_'
      },
      devtool: 'source-map'
    }
  }))
  .pipe(gulp.dest('dist'));
});
