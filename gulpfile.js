let gulp = require('gulp');
let rename = require('gulp-rename');
let preprocess = require('gulp-preprocess');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

var ENV = argv.env || process.env.NODE_ENV || 'dev';

gulp.task('preprocess', function(){
  gulp.src('src/index.template.html')
    .pipe(preprocess({context: { NODE_ENV: ENV }}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('src/'))
});
