var gulp = require('gulp');
var sass = require('gulp-sass');

const sassFiles = [
    "./src/styles/custom.scss",
  ];

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});


gulp.task('default',function() {
    gulp.watch(sassFiles,['styles']);
});