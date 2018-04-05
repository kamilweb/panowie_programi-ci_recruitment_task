'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');

let babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/css/*.scss', ['sass']);
});

gulp.task('default', () =>
  gulp.src('src/app.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(''))
);