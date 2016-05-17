var gulp = require('gulp');

var preprocess = require('gulp-preprocess');
gulp.task('dev', function() {
  gulp.src('./deploy/appsettings.js')
    .pipe(preprocess({context: { NODE_ENV: 'DEVELOPMENT', DEBUG: true}}))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('test_env', function() {
  gulp.src('./deploy/appsettings.js')
    .pipe(preprocess({context: { NODE_ENV: 'TEST', DEBUG: true}}))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('prod', function() {
  gulp.src('./deploy/appsettings.js')
    .pipe(preprocess({context: { NODE_ENV: 'PRODUCTION'}}))
    .pipe(gulp.dest('./www/js/'));
});
