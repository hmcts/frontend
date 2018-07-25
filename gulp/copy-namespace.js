const gulp = require('gulp');

gulp.task('copy-namespace', function () {
  return gulp.src([
    'src/namespace.js'
  ])
  .pipe(gulp.dest('public/javascripts/'))
});