// Include gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var serve = require('gulp-serve');
var connect = require('gulp-connect');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/todo.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
});

gulp.task('webserver', function() {
  connect.server();
});

// Default Task
gulp.task('default', ['lint', 'watch']);
