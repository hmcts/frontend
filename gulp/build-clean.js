const gulp = require('gulp')
const del = require('del')

// Clean task for a specified folder --------------------
// Removes all old files, except for package.json
// and README in all package
// ------------------------------------------------------

gulp.task('build:clean', () => {
  return del.sync([
    `package/**`,
    `!package`,
    `!package/package.json`,
    `!package/README.md`
  ])
})