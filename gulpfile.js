'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('sass', () => {
  gulp.src('./src/css/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/css/all.scss', ['sass']);
});

gulp.task('es6', () =>
  gulp.src('./src/js/all.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
);

gulp.task('es6:watch', () => {
  gulp.watch('./src/js/all.js', ['es6']);
});

gulp.task('build', ['sass', 'es6']);
gulp.task('default', ['sass:watch', 'es6:watch']);