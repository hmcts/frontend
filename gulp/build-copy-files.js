const gulp = require('gulp')

gulp.task('build:copy-files', () => {
  return gulp.src([
    'src/**/*',
    '!**/.DS_Store',
    '!src/README.md' // Don't override the existing README in /package
  ])
  .pipe(gulp.dest('package/'))
})