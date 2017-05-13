var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');


gulp.task('browserSync', function() {
  browserSync.init({
    proxy: '192.168.33.16/',
    port: 7000,
    open: false
  });
});

gulp.task('browserSyncReload', ['webpack'], function(done) {
  browserSync.reload();
  done();
});