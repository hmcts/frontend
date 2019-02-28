const gulp = require('gulp');

gulp.task('copy-global-javascript', function () {
  return gulp.src([
    'src/namespace.js',
    'src/helpers.js'
  ])
  .pipe(gulp.dest('public/javascripts/'))
});