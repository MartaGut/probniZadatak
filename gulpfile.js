var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imgOpt = require('gulp-imagemin');
minifycss = require('gulp-minify-css'),
uglifycss = require('gulp-uglify-css'),


gulp.task('sass', function(){
    return gulp.src('website/scss/style.scss')
    .pipe(sass(''))
    .pipe(gulp.dest('website/css'))
});

gulp.task('uglifycss', function(){
    return gulp.src('website/css/style.scss')
    .pipe(uglifycss(''))
    .pipe(gulp.dest('website/css'))
})

gulp.task('imgOpt', function(){
    return gulp.src('website/img/*')
    .pipe(imagemin(''))
    .pipe(gulp.dest('optImg'))
})

gulp.task('uglify', function(){
    return gulp.src('website/js/script.js')
    .pipe(uglify(''))
    .pipe(gulp.dest('minjs'))
});

gulp.task('watch', function(){
   return gulp.watch('website/js/script.js', ['uglify'])
});