const gulp = require('gulp');

gulp.task('build:copy-files', () => {
  return gulp.src([
    'src/**/*',
    '!**/.DS_Store',
    '!src/README.md'
  ])
  .pipe(gulp.dest('package/'));
});