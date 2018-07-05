const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', function(done) {
  runSequence(
    'generate-assets',
    'watch',
    'server', done
  );
});

gulp.task('generate-assets', function(done) {
  runSequence(
    'clean',
    'copy-assets',
    'sass', done
  );
});

gulp.task('watch', function(done) {
  runSequence(
    'watch-sass', done
  );
});

gulp.task('build:package', done => {
  runSequence(
    'build:clean',
    'build:copy-files',
    // 'js:compile',
    // 'generate:readme',
    done
  );
});