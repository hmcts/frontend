const gulp = require('gulp');

gulp.task('watch-sass', function() {
  return gulp.watch([
    'src/components/**/*.scss', 
    'app/assets/sass/*.scss'], 
    ['sass']);
});