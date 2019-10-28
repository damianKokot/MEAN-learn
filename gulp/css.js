let gulp = require('gulp');
let stylus = require('gulp-stylus');

gulp.task('css', function(){
	return gulp.src('css/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('assets'));
});

gulp.task('watch:css', function(){
	gulp.watch('css/**/*.styl', gulp.series(['css']));
});