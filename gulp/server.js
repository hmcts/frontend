const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js, json',
  }).on('quit', function() {
    process.exit(0);
  });
});