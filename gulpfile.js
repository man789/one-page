// Variables

let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
let browserSync = require('browser-sync').create();

// Tasks

gulp.task('sassification', function(){
  return gulp.src('dev/css/*.scss')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function(path){
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('prod/css'));
});

gulp.task('htmlification', function(){
  return gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'));
});

gulp.task('jsification', function(){
  return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path){
      path.basename += ".min";
    }))
    .pipe(gulp.dest('prod/js'));
});

gulp.task('imageTransfer', function(){
  return gulp.src('dev/img/**')
    .pipe(gulp.dest('prod/img'));
});

gulp.task('fontTransfer', function(){
  return gulp.src('dev/fonts/**')
    .pipe(gulp.dest('prod/fonts'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "prod/"
      }
  });
});

// Exec

gulp.task('observation', gulp.parallel('browser-sync', 'sassification', 'htmlification','jsification', 'imageTransfer','fontTransfer', function(){
  gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
  gulp.watch('dev/*.html', gulp.series('htmlification'));
  gulp.watch('dev/js/*.js', gulp.series('jsification'));
  gulp.watch('prod/**/*').on('change', browserSync.reload);
}));
gulp.task('default', gulp.series('observation'));
