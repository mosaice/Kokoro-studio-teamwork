var gulp = require('gulp');
var config = require('../config').html;

gulp.task('html', function () {
  return gulp.src(config.all)
      .pipe(gulp.dest(config.dest))
});
