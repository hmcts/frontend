// const gulp = require('gulp');

// gulp.task('js:compile', () => {
//   return gulp.src([
//     'src/all.js'
//   ])
//   .pipe(rollup({
//     name: 'HMCTSFrontend',
//     legacy: true,
//     format: 'iife'
//   }))
//   .pipe(gulpif(isDist, uglify()))
//   .pipe(gulpif(isDist,
//     rename({
//       basename: 'hmcts-frontend',
//       extname: '.min.js'
//     })
//   ))
//   .pipe(eol())
//   .pipe(gulp.dest('package/'))
// });