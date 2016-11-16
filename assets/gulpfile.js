var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename');
  watch = require('gulp-watch'),
  livereload = require('gulp-livereload');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp'],
  port:3000
  });
});

gulp.task('livereload', function() {
  gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
    .pipe(watch())
    .pipe(connect.reload()).pipe(livereload());
});

gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'watch','livereload']);