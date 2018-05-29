var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');
var plumber = require('gulp-plumber');
/**
 * File patterns
 **/

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');

var sourceFiles = [

  // Make sure module files are handled first
  path.join(sourceDirectory, '/**/*.module.js'),

  // Then add all JavaScript files
  path.join(sourceDirectory, '/**/*.js')
];

gulp.task('build', function() {
  gulp.src(sourceFiles)
    .pipe(plumber())
    .pipe(concat('ng-dynamic-infinite-tree.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('ng-dynamic-infinite-tree.min.js'))
    .pipe(gulp.dest('./dist'));
});
