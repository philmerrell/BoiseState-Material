var gulp    = require('gulp'),
    config  = require('./build.config.js'),
    pkg     = require('./package.json');

var changed   = require('gulp-changed'),
    del       = require('del'),
    inject    = require('gulp-inject'),
    jshint    = require('gulp-jshint'),
    merge     = require('merge-stream'),
    sequence  = require('run-sequence');



gulp.task('clean', function() {
  return del([config.build_dir, config.compile_dir]);
});

gulp.task('lint', function() {
  return gulp.src('src/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('copy', function() {
  var assets = gulp.src('src/assets/**/*', {
    base: 'src/assets/'
  })
    .pipe(changed(config.build_dir + '/assets'))
    .pipe(gulp.dest(config.build_dir + '/assets'));

  var app_js = gulp.src(config.app_files.js)
    .pipe(changed(config.build_dir + '/src'))
    .pipe(gulp.dest(config.build_dir + '/src'));

  var bower_js = gulp.src(config.bower_components.js, { base: '.' })
    .pipe(changed(config.build_dir))
    .pipe(gulp.dest(config.build_dir));

  var bower_css = gulp.src(config.bower_components.css, { base: '.' })
    .pipe(changed(config.build_dir))
    .pipe(gulp.dest(config.build_dir));

  return merge([assets, app_js, bower_js, bower_css]);
});


/**
 * Inject app dependencies into build/index.html file
 */
gulp.task('index', function() {
  var target = gulp.src('src/index.html');
  var files = [].concat(
    config.bower_components.js,
    'src/**/*.module.js',
    'src/**/*.js',
    config.bower_components.css
  );
  var sources = gulp.src(files, {
    read: false,
    cwd: config.build_dir
  });

  // inject the files, and copy it to the build directory
  return target.pipe(inject(sources, { addRootSlash: false }))
    .pipe(gulp.dest(config.build_dir));
});


gulp.task('build', function() {
  sequence(['lint', 'clean'], 'copy', 'index');
});
