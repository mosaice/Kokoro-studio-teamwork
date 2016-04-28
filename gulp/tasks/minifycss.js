var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var config = require('../config').sass;

gulp.task('cssmin', function () {
  return gulp.src(config.compile)
        .pipe(cssmin())
        .pipe(gulp.dest(config.dest));
});
