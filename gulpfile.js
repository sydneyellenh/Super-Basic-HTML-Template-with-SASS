var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    //root scss file (import all your partials into here)
    return gulp.src('./src/scss/styles.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        // add vendor prefixes
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css/'));
  });

  gulp.task('watch', function() {
    // this assumes your sass is in a directory named sass
    return gulp.watch(['./src/scss/**/*.scss'], gulp.series('sass'));
});