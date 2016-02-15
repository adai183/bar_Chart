var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {

	gulp.watch('./index.html').on('change', browserSync.reload);
	gulp.watch('assets/css/**/*.css').on('change', browserSync.reload);
	gulp.watch('assets/js/**/*.js').on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
});
