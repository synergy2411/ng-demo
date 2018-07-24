var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('gulp-browserify');

gulp.task("build", function(){
    console.log("BUILDING...");
    return gulp.src("./scripts/app.js")
        .pipe(browserify())
        .pipe(gulp.dest("./dist"));
})

gulp.task("js-watch", ["build"], function(done){
    console.log("RELOADING...");
    browserSync.reload();
    done();
})

gulp.task("default", function(){
    console.log("-- SERVER LISTENING ON PORT 3000 --");
    browserSync.init({
        server : {
            baseDir : './'
        }
    });
    gulp.watch("*/**/*.js", ['js-watch']);
    gulp.watch("*.html", browserSync.reload);
});