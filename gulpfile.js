const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');


requireDir('./gulp', {
  recurse: true // To include subdirectories - https://www.npmjs.com/package/require-dir
});

gulp.task('generate-assets', gulp.series('clean',
'copy-component-javascript',
'copy-vendor-javascript',
'copy-global-javascript',
'sass', (done) => {
    done()
}));

gulp.task('watch', gulp.series('watch-sass', (done) => {
    done();
}));


gulp.task('build:package', gulp.series('build:clean',
'build:copy-files',
'build:javascript',
'build:compress-images', (done) => {
    done()
}));

gulp.task('default', gulp.series('generate-assets', 'watch', 'server', (done) => {
  done()
}));
