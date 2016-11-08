// Include gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var serve = require('gulp-serve');
var connect = require('gulp-connect');
var Server = require('karma').Server;

// Lint Task
gulp.task('analyse', function() {
    return gulp.src('js/todo.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
});

gulp.task('webserver', function() {
  connect.server({livereload: true,root: ['.', 'src']});
});


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// Default Task
gulp.task('default', ['watch','webserver']);
