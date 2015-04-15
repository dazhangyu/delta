'use strict';
// 浏览器同步工具
var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  browserSync({
    proxy: 'localhost:' + config.serverport
  },function(){
  	console.log(browserSync);
  });

});