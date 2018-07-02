const gulp = require('gulp');
const runSequence = require('run-sequence');


gulp.task('default', function() {
  runSequence(
    'generate-assets',
    'watch', 
    'server'
  );
});


gulp.task('generate-assets', function() {
  runSequence(
    'clean',
    'sass'
  );
});


gulp.task('watch', function() {
  runSequence(
    'watch-sass'
  );
});