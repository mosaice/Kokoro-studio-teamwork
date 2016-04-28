var gulp = require('gulp');
var url = require('url');
var proxy = require('proxy-middleware');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var config = require('../config');

gulp.task('watch', function () {
  var proxyOptions = url.parse('http://localhost:19110');
  proxyOptions.route = '/api';

  browserSync.init({
    files: './dist/**/*',
    open: true,
    port: 3000,
    server: {
      baseDir: './dist',
      middleware: [proxy(proxyOptions)]
    }
  });

  gulp.watch(config.sass.all, ['sass']);
  gulp.watch(config.html.all, ['html']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.js.src, ['javascripts']);
});
