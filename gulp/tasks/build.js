var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('build', ['clean','sass'], function () {
  gulp.start('cssmin', 'html', 'uglify');
});
