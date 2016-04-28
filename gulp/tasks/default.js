var gulp = require('gulp');

gulp.task('default', ['clean'], function () {
  gulp.start('sass', 'html', 'images', 'javascripts', 'watch');
});
