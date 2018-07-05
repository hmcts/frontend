const gulp = require('gulp');

gulp.task('copy-assets', function() {
  return gulp.src('src/assets/**')
  .pipe(gulp.dest('public/'));
});