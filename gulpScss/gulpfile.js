const gulp = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

function style() {
  return gulp.src("./style/*.scss").pipe(sass()).pipe(gulp.dest("./style"));
}

exports.style = style;


function mini() {
    return gulp.src("./style/*.css").pipe(csso()).pipe(gulp.dest("./style"));
}

exports.mini = mini;




function watch() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    })
    gulp.watch('./style/*.scss', style);
    style()
    // gulp.watch('./*.html').on('change', browserSync.reload);
    // gulp.watch('./*.js').on('change', browserSync.reload);
}



exports.watch = watch;

