var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['browserSync'], function(callback) {
	runSequence(
		'clearCache', 
		'clean',
		['sass','sprite', 'lint', 'webpack', 'imageOptim'],
		'serve',
		callback
	);
});