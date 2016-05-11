var gulp = require('gulp');

gulp.task('preBuild', ['clean'], function () {
  gulp.start('sass');
});
