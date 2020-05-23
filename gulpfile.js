const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const scssPath = 'styles/scss/*.scss';

gulp.task('styles', () => {
    return gulp.src(scssPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css/'));
});

gulp.task('clean', () => {
    return del([
        'styles/css/*.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch(scssPath, (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});