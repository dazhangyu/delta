'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
gulp.task('watch', ['browserSync', 'server'], function() {
	// 检测 js 文件夹
    gulp.watch(config.scripts.src, ['lint', 'scripts']);
    //gulp.watch(config.styles.watch, ['styles']);
    // 检测 scss
    gulp.watch(config.styles.src, ['styles']);
    // 检测 images
    gulp.watch(config.images.src, ['images', 'reload']);
    gulp.watch(config.views.src, ['views', 'reload']);
    //gulp.watch(config.copylib.src, ["copylib"]);
});