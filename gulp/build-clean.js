const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('build:clean', () => {
  return gulp.src([
    'package/*',
    '!package',
    '!package/package.json',
    '!package/README.md'
  ])
  .pipe(clean());
});