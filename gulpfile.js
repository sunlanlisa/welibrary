/**
 * Created by sunlan on 16/8/6.
 */
var gulp = require('gulp');
var $ = require("gulp-load-plugins")({
    pattern: ['gulp-*']
})

gulp.task('less',function(){
    gulp.src(['src/less/global.less'])
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe($.rename({extname:'.min.css'}))
        .pipe(gulp.dest('static/style/'))

});
gulp.task('js-dev',function(){
    gulp.src(['src/js/**/*.js'])
        .pipe($.uglify())
        .pipe(gulp.dest('static/js/'));
//    gulp.src(['src/js/lib/*.js'])
//        .pipe($.uglify())
//        .pipe(gulp.dest('static/js/lib'));
});

gulp.task('watch',function(){
    gulp.watch(['src/less/*.less','src/js/**/*.js'],['less','js-dev']);
})
gulp.task('default',['less','js-dev','watch']);