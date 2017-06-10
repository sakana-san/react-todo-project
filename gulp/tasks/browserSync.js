var gulp = require('gulp');
var browserSync = require('browser-sync');
var historyApi = require('connect-history-api-fallback');


gulp.task('browserSync', function() {
  browserSync.init({
    proxy: '192.168.33.16/',
    port: 7000,
    open: false,
    //reactのSPAページリロード時、404を回避
    middleware: [historyApi()]
  });
});

gulp.task('browserSyncReload', ['webpack'], function(done) {
  browserSync.reload();
  done();
});