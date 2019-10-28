let gulp = require('gulp');
let concat = require('gulp-concat');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify-es').default;
let ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function() {
	return gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(ngAnnotate())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
});

gulp.task('watch:js', gulp.series(['js'], function(){
	gulp.watch('ng/**/*.js', gulp.series(['js']));
}));