const gulp = require('gulp');

gulp.task('copy-assets', () => {
  return gulp.src('src/assets/**')
  .pipe(gulp.dest('public/'));
});