var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
    browserSync.init({
        proxy: 'http://localhost:8888/clicque'
    });
});

gulp.task('watch',['browserSync'], function(){
    gulp.watch('./**/*.php').on('change', browserSync.reload);
    gulp.watch('./**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*./js').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);

})
 