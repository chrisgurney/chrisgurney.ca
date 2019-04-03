var Connect = require('gulp-connect');
var Del = require('del');
var Gulp = require('gulp');
var Include = require('gulp-file-include');
var CleanCss = require('gulp-clean-css');
var Uglify = require('gulp-uglify');
var Rename = require('gulp-rename');
var Rsync = require('gulp-rsync');

/* ***** */
/* Paths */
/* ***** */

var paths = {
  src: {
  	base: 'src/',
  	css: 'src/css/**/*',
  	html: 'src/index.html',
  	favicon: 'src/favicon.png',
  	htaccess: 'src/.htaccess',  	
  	html: 'src/**.html',
		includes: 'src/includes',  	
  	images: [
  		'src/images/**/*'
  	],  	
  	js: 'src/js/**/*',
  	manifest: 'src/manifest.json',
  	resume: 'src/chrisgurney-resume.pdf',  	
  	sw: 'src/sw.js',
  	test: 'src/mdtest/**.html',
 		vendor: 'src/vendor/**/*',
  },
  output: {
   	base: 'dist/',
   	css: 'dist/css',
  	html: 'dist/',
  	images: 'dist/images/',
  	js: 'dist/js/',  	
  	test: 'dist/mdtest',
  	vendor: 'dist/vendor',	
  }
}

/* ***** */
/* Tasks */
/* ***** */

// Minify CSS
/*
      './css/*.css',
      '!./css/*.min.css'
*/
Gulp.task('minify-css', function(done) {

  return Gulp.src(paths.src.css)
    .pipe(CleanCss())
    .pipe(Rename({
      suffix: '.min'
    }))
    .pipe(Gulp.dest(paths.output.css));

});

// gulp.task('css-inline', function() {
// 	return gulp.src(paths.src.html)
// 	  .pipe(inlineSource({
//       rootpath: paths.src.base
//     }))
// 		.pipe(inlineCss({
// 			preserveMediaQueries: true
// 		}))
// 		.pipe(gulp.dest(paths.output.html))
// 		.on('finish', function() {
// 			logMessage('Completed task: css-inline');
// 		});
// });

// Minify JavaScript
Gulp.task('minify-js', function(done) {

  return Gulp.src(paths.src.js)
    .pipe(Uglify())
    .pipe(Rename({
      suffix: '.min'
    }))
		.pipe(Gulp.dest(paths.output.js));

});

Gulp.task('include-html', function(done) {

  return Gulp.src(paths.src.html)
	  .pipe(Include({
		  prefix: '@@',
		  basepath: paths.src.includes
		}))
		.pipe(Gulp.dest(paths.output.base));		 

});

Gulp.task('copy-css', function(done) {

	return Gulp.src(paths.src.css)
		.pipe(Gulp.dest(paths.output.css));

});

Gulp.task('copy-favicon', function(done) {

	return Gulp.src(paths.src.favicon)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-htaccess', function(done) {

	return Gulp.src(paths.src.htaccess)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-html', function(done) {

	return Gulp.src(paths.src.html)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-images', function(done) {

	return Gulp.src(paths.src.images)
		.pipe(Gulp.dest(paths.output.images));

});

Gulp.task('copy-js', function(done) {

	return Gulp.src(paths.src.js)
		.pipe(Gulp.dest(paths.output.js));

});

Gulp.task('copy-manifest', function(done) {

	return Gulp.src(paths.src.manifest)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-resume', function(done) {

	return Gulp.src(paths.src.resume)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-sw', function(done) {

	return Gulp.src(paths.src.sw)
		.pipe(Gulp.dest(paths.output.base));

});

Gulp.task('copy-vendor', function(done) {

	return Gulp.src(paths.src.vendor)
		.pipe(Gulp.dest(paths.output.vendor));

});

// Gulp.task('test', function() {
//   /* return gulp.src([paths.src.test, '!' + paths.src.includes + '/**']) */	
//   return Gulp.src(paths.src.test)
// 	  .pipe(Include({
// 		  prefix: '@@',
// 		  basepath: paths.src.base,
// 		  context: {
// 		  	mdfile: '\'md/test.md\''
// 		  },
// 		  filters: {
//         markdown: markdown.parse
//       }
// 		}))
// 		.pipe(Gulp.dest(paths.output.test));	    
// });

/* *********** */
/* Clean Tasks */
/* *********** */

Gulp.task('clean', function(done) {
  return Del([
    paths.output.base
  ]);
});

/* ************** */
/* Combined Tasks */
/* ************** */

Gulp.task('build',
	Gulp.series(
		'minify-css',		
		'copy-favicon',
		'include-html',
		'copy-htaccess',		
		'copy-images',
		'minify-js',			
		'copy-manifest',
		'copy-resume',		
		'copy-sw',
		'copy-vendor'			
	),
	function(done) {
		done();
	}
);	

/* ************ */
/* Deploy Tasks */
/* ************ */

Gulp.task('deploy', function(done) {

  return Gulp.src(paths.output.base, {dot: true})
    .pipe(Rsync({
      root: paths.output.base,
      recursive: true,
      compress: true,
      incremental: true,
      include: ['.htaccess'],
      username: 'chrisgurneyca',
      hostname: 'chrisgurney.ca',
      destination: 'chrisgurney.ca/'
    }));

});

/* ********** */
/* Main Tasks */
/* ********** */

Gulp.task('server', function(done) {

  return Connect.server({
  	root: paths.output.base,
  	livereload: true
  });

});

Gulp.task('watch', function(done) {

 	return Gulp.watch(
 		paths.src.base + '**/*',
  	Gulp.series('build'));

});

Gulp.task('default',
	Gulp.series(
		'clean', 'build',
		Gulp.parallel(
			'server',
			'watch'
		),
	function(done) {
		done();
	})
);
