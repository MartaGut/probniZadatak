var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imgOpt = require('gulp-imagemin')


gulp.task('sass', function(){
    return gulp.src('website/scss/style.scss')
    .pipe(sass(''))
    .pipe(gulp.dest('website/css'))
});

gulp.task('styleugly', function(){
    return gulp.src('website/scss/style.scss')
    .pipe()
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