var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


gulp.task('sass', function(){
    return gulp.src('website/scss/style.scss')
    .pipe(sass(''))
    .pipe(gulp.dest('website/css'))
});


gulp.task('uglify', function(){
    return gulp.src('website/js')
    .pipe(uglify(''))
    .pipe(gulp.dest('minjs'))
});