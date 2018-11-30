const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean-css");
const pug = require("gulp-pug");
const beautify = require("gulp-jsbeautifier");
const imagemin = require("gulp-imagemin");

gulp.task("build-css", done =>  {

    gulp.src("./src/scss/**/*.scss")

        .pipe(sass())
    // .pipe(clean())
        .pipe(gulp.dest("./public/styles"))

    done();
});

gulp.task("pug", done => {

    gulp.src("./src/templates/*.pug")

        .pipe(pug())
        .pipe(beautify({}))
        .pipe(gulp.dest("./public"))

    done();
});

gulp.task("image", done => {

    gulp.src("./src/images/**/*")

        .pipe(imagemin())

        .pipe(gulp.dest("./public/images"))

    done();

});

gulp.task("default",
    gulp.series(
        "build-css",
        "pug",
        "image"
    )
);
