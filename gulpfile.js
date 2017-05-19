var gulp = require("gulp"),
    sass = require("gulp-sass"),
    nodemon = require("gulp-nodemon"),
    browserSync = require( "browser-sync");



gulp.task("cssCompiler", function() {
  return gulp.src("./scss/*.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest("./public/stylesheets/"));
});

/**
 * for server related code refresh
 */ 
gulp.task("refreshServer", function () {
    nodemon({
        script: "./bin/www",
        ext: "js"
    });
});

//for frontend template and css refresh
gulp.task( "browserSync", function() {
	browserSync.init(["./public/stylesheets/*.css",  "./views/*.ejs"], {
        proxy: "localhost:3300"
  	});	
});

gulp.task("watcher", function() {
    gulp.watch("./scss/*.scss", ["cssCompiler"]);
});


gulp.task("dev", ["refreshServer", "watcher", "browserSync"]);


