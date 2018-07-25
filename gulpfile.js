const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});


gulp.task('default', () => {
  runSequence(
    'generate-assets',
    'watch',
    'server'
  );
});


gulp.task('generate-assets', () => {
  runSequence(
    'clean',
    'copy-assets',
    'copy-component-javascript',
    'copy-vendor-javascript',
    'sass'
  );
});


gulp.task('watch', () => {
  runSequence(
    'watch-sass'
  );
});


gulp.task('build:package', () => {
  runSequence(
    'build:clean',
    'build:copy-files',
    'build:javascript'
  );
});
