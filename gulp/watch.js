const gulp = require('gulp');

gulp.task('watch-sass', () => {
  return gulp.watch([
    'src/assets/images/**',
    'src/settings/**/*.scss',
    'src/objects/**/*.scss',
    'src/helpers/**/*.scss',
    'src/utilities/**/*.scss',
    'src/components/**/*.scss',
    'src/components/**/*.js',
    'src/namespace.js',
    'app/assets/sass/*.scss'
  ], ['sass', 'copy-component-javascript', 'copy-namespace']);
});