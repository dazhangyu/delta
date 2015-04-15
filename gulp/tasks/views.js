'use strict';

var gulp = require('gulp');
var config = require('../config');
// 创建一个 views 任务
gulp.task("views",function(){
	return gulp.src(config.views.src)
			   .pipe(gulp.dest(config.views.dest));
})