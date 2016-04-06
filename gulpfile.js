// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('dev/styles/index.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dev/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/*.js', ['scripts']);
    gulp.watch('dev/styles/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

// Default Task
gulp.task('default', ['sass', 'scripts', 'watch']);
