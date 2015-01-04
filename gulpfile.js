var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

var lessPath="less";

gulp.task('styles', function() {
  	return gulp.src('less/styles.less')
  		.pipe(notify({ message: 'Start compiling.....' }))
	    .pipe(less({ style: 'expanded' }))
	    .pipe(gulp.dest("css"))
	    .pipe(notify({ message: 'Ready compiling.....' }))
	    .pipe(livereload());
});


// Default task
gulp.task('default', function() {
    gulp.start('styles', 'watch');
});

gulp.task('watch', function() {
	// Watch livereload plugin
	livereload.listen({ basePath: 'dist' });
	// Watch .less files
	gulp.watch([lessPath + '/**.less', lessPath + '/**/**.less','*.html'], ['styles']);
	
});