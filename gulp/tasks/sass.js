var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

var $ = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'last 3 version',
  'ios >= 7',
  'android >= 4.2'
];

gulp.task('sass', function() {
  return gulp.src(['src/sass/**/*.sass'])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sass({outputStyle: gutil.env.type === 'production' ? 'compressed' : 'expanded'}))
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({stream: true}));
});