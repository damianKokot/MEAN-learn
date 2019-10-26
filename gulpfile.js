let gulp = require('gulp');
let concat = require('gulp-concat');

gulp.task('js', () => {
	gulp.src(['ng/module.js'], 'ng/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'));
});