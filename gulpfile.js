const { dest, series, src, watch } = require('gulp');
const zip = require('gulp-zip');

/**
 * Copy source files to dist to be packaged up.
 */
function copy() {
  return src('src/*')
    .pipe(dest('dist/'));
}
exports.copy = copy;

/**
 * ZIP final build for publishing on the Chrome Web Store.
 */
function zipTask() {
  return src('dist/*')
    .pipe(zip('github-wiki-search.zip'))
    .pipe(dest('./'));
}
exports.zip = zipTask;

// Tasks
exports.default = series(copy, zipTask);

// Watch
exports.watch = () => watch('src/*', copy);
