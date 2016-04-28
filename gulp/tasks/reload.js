var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function () {
  browserSync.reload();
});
