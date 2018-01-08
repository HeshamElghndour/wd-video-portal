const gulp        = require('gulp'),
browserSync       = require('browser-sync').create(),
concat            = require('gulp-concat'),
sass              = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/main.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.reload({stream:true}));
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch("src/video-page.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);