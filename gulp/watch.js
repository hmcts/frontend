const gulp = require('gulp');

gulp.task('watch-sass', () => {
  return gulp.watch([
    'src/assets/images/**',
    'src/settings/**/*.scss',
    'src/components/**/*.scss',
    'app/assets/sass/*.scss'
  ], ['sass']);
});