var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
const Babelify = require('babelify');

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
    var bundle = browserify('./src/index.js');

    if (watch) {
        bundle = watchify(bundle);
        bundle.on('update', () => {
            console.log('---> Bundling... wait');
            rebundle();
        });
    }
    function rebundle() {
        bundle
        .transform(babel,{ "presets": ["@babel/preset-env"], "plugins": [ ["@babel/transform-runtime"]]} )
        .bundle()
        .on('error', function(err){console.log(err); this.emit('end') })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public/js'))
    }

    rebundle();
}

gulp.task('build', async () => { return compile();});

gulp.task('watch', () => { return compile(true); });

gulp.task('default', gulp.series(['styles', 'assets','build']))