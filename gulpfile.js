var Changed = require('gulp-changed');
var CleanCss = require('gulp-clean-css');
var Connect = require('gulp-connect');
var Del = require('del');
var FS = require('fs');
var Gulp = require('gulp');
var Include = require('gulp-file-include');
var Markdown = require('./lib/vendor/markdown');
var Uglify = require('gulp-uglify');
var Rename = require('gulp-rename');
var Rsync = require('gulp-rsync');
var WebP = require('gulp-webp');

var Trello = require('./lib/trello.js');

/* ************* */
/* Configuration */
/* ************* */

var paths = require('./gulpfile.config.json');

/* *************************************************************************
   Build Tasks
   ************************************************************************* */

Gulp.task('build:css', function(done) {

  return Gulp.src(paths.src.css)
    .pipe(CleanCss())
    .pipe(Rename({
      suffix: '.min'
    }))
    .pipe(Gulp.dest(paths.output.css))
    .pipe(Connect.reload());

});

Gulp.task('build:html', function(done) {

  return Gulp.src(paths.src.html)
	  .pipe(Include({
		  prefix: '@@',
		  basepath: paths.src.includes,
		  filters: {
        markdown: Markdown.parse
      }
		}))
		.pipe(Gulp.dest(paths.output.base))
		.pipe(Connect.reload());	 

});

Gulp.task('build:images', function(done) {

	return Gulp.src(paths.src.images)
		.pipe(Changed(paths.output.images))	
		.pipe(Gulp.dest(paths.output.images))
		.pipe(Connect.reload());

});

Gulp.task('build:includeJson', function(done) {

	try {
		// check for the dist folder (throws exception if it does not exist)
		FS.accessSync(paths.output.base);
	}
	// if the folder does not exist...
	catch (err) {
		FS.mkdirSync(paths.output.base);
	}

	var trello_json = FS.readFileSync(paths.src.includeJson, "utf8");

	FS.writeFileSync(paths.output.includeJson, 
		JSON.stringify(Trello.convertBoard(trello_json, 'object'), null, 2));

	// console.log("Created: " + paths.output.includeJson);

	done();

});

Gulp.task('build:js', function(done) {

  return Gulp.src(paths.src.js)
    .pipe(Uglify())
    .pipe(Rename({
      suffix: '.min'
    }))
		.pipe(Gulp.dest(paths.output.js))
		.pipe(Connect.reload());

});

Gulp.task('build:meta', function(done) {

	return Gulp.src(paths.src.metaFiles, {dot: true})
		.pipe(Changed(paths.output.base))	
		.pipe(Gulp.dest(paths.output.base))
		.pipe(Connect.reload());

});

Gulp.task('build:vendor', function(done) {

	return Gulp.src(paths.src.vendor)
		.pipe(Changed(paths.output.vendor))
		.pipe(Gulp.dest(paths.output.vendor))
		.pipe(Connect.reload());

});

Gulp.task('build:webp', function(done) {
	
	// FIXME: Understand why this doesn't cause all jpegs to be converted:
	//   .pipe(Changed(paths.output.images))
	return Gulp.src(paths.src.jpgs)
		.pipe(WebP())
		.pipe(Gulp.dest(paths.output.images))
		.pipe(Connect.reload());		

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

// Gulp.task('copy-css', function(done) {
// 	return Gulp.src(paths.src.css)
// 		.pipe(Changed(paths.output.css))	
// 		.pipe(Gulp.dest(paths.output.css));
// });

// Gulp.task('copy-html', function(done) {
// 	return Gulp.src(paths.src.html)
// 		.pipe(Changed(paths.output.base))
// 		.pipe(Gulp.dest(paths.output.base));
// });

// Gulp.task('copy-js', function(done) {
// 	return Gulp.src(paths.src.js)
// 		.pipe(Changed(paths.output.js))
// 		.pipe(Gulp.dest(paths.output.js));
// });

/* *************************************************************************
   Watch Tasks
   ************************************************************************* */

Gulp.task('watch:css', function(done) {

	return Gulp.watch(paths.src.css, 
		Gulp.series('build:css'));

});

Gulp.task('watch:includeJson', function(done) {

	return Gulp.watch(paths.src.includeJson,
		Gulp.series(
			'build:includeJson',
			'build:html'));

});

Gulp.task('watch:html', function(done) {

	return Gulp.watch(paths.src.htmlWatchFiles, 
		Gulp.series('build:html'));

});

Gulp.task('watch:images', function(done) {

	return Gulp.watch(paths.src.images, 
		Gulp.parallel(
			'build:images',
			'build:webp'
		));

});

Gulp.task('watch:js', function(done) {

	return Gulp.watch(paths.src.js, 
		Gulp.series('build:js'));

});

Gulp.task('watch:meta', function(done) {

	return Gulp.watch(paths.src.metaFiles, 
		Gulp.series('build:meta'));

});

Gulp.task('watch:vendor', function(done) {

	return Gulp.watch(paths.src.vendor, 
		Gulp.series('build:vendor'));

});

/* *************************************************************************
   Clean Tasks 
   ************************************************************************* */

Gulp.task('clean', function(done) {
  return Del([
    paths.output.base
  ]);
});

/* *************************************************************************
   Deploy Tasks
   ************************************************************************* */

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

/* *************************************************************************
   Main Tasks
   ************************************************************************* */

Gulp.task('build',
	Gulp.parallel(
		'build:css',
		Gulp.series(
			'build:includeJson',			
			'build:html'),
		'build:meta',
		'build:images',
		'build:webp',
		'build:js',
		'build:vendor'			
	),
	function(done) {
		done();
	}
);	

Gulp.task('server', function() {

  Connect.server({
  	root: paths.output.base,
  	livereload: true
  });

});

Gulp.task('watch', 
	Gulp.parallel(
		'watch:css',
		'watch:includeJson',
		'watch:html',	
		'watch:images',
		'watch:js',
		'watch:meta',
		'watch:vendor'),
	function(done) {
		done();
	}
);

Gulp.task('default',
	Gulp.series(
		'clean', 
		'build',
		Gulp.parallel(
			'server',
			'watch'
		),
	function(done) {
		done();
	})
);
