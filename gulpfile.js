const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});


gulp.task('default', (done) => {
  runSequence(
    'generate-assets',
    'watch',
    'server',
    done
  );
});


gulp.task('generate-assets', (done) => {
  runSequence(
    'clean',
    'copy-component-javascript',
    'copy-vendor-javascript',
    'copy-global-javascript',
    'sass',
    done
  );
});


gulp.task('watch', (done) => {
  runSequence(
    'watch-sass',
    done
  );
});


gulp.task('build:package', (done) => {
  runSequence(
    'build:clean',
    'build:copy-files',
    'build:javascript',
    'build:compress-images',
    done
  );
});
