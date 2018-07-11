const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', (done) => {
  runSequence(
    'generate-assets',
    'watch',
    'server', done
  );
});

gulp.task('generate-assets', (done) => {
  runSequence(
    'clean',
    'copy-assets',
    'copy-component-javascript',
    'copy-vendor-javascript',
    'sass', done
  );
});

gulp.task('watch', (done) => {
  runSequence(
    'watch-sass', done
  );
});

gulp.task('build:package', (done) => {
  runSequence(
    'build:clean',
    'build:copy-files',
    // 'build:compile-javascript'
    done
  );
});