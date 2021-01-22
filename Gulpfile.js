var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('styles', () => {
    return gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/css'));
})

gulp.task('assets', () => {
    return gulp
        .src('assets/*')
        .pipe(gulp.dest('public/img'));
})

function compile(watch){
    var bundle = watchify(browserify('./src/index.js'));

    function rebundle() {
        bundle
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public/js'))
    }
    if (watch) {
        bundle.on('update', () => {
            console.log('---> Bundling... wait');
            rebundle();
        })
    }
    rebundle();
}

gulp.task('build', () => { return compile(); });

gulp.task('watch', () => { return compile(true); });

gulp.task('default', gulp.series(['styles', 'assets','build']))