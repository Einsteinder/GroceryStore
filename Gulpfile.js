const gulp = require("gulp");
const concatenate = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoPrefix = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');



const sassFiles = [
    "./src/styles/custom.scss",
  ];
  const vendorJsFiles = [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/popper.js/dist/popper.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
  ];
gulp.task('styles', function() {
    gulp.src(sassFiles)
    .pipe(sourcemaps.init())

        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())

        .pipe(sourcemaps.write())

        .pipe(gulp.dest('./public/css/'));
});
gulp.task("scripts", () => {
    gulp
      .src(vendorJsFiles)
      .pipe(concatenate("all.js"))
      .pipe(gulp.dest("./public/js/"));
  });
  

gulp.task('default',function() {
    gulp.watch(sassFiles,['styles']);
});