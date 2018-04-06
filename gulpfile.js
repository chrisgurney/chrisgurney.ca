var connect = require('gulp-connect');
var del = require('del');
var gulp = require('gulp');
var includeFile = require('gulp-file-include');
var inlineSource = require('gulp-inline-source');
var inlineCss = require('gulp-inline-css');
var cleanCSS = require('gulp-clean-css');
/* https://github.com/purifycss/gulp-purifycss */
var purifyCSS = require('gulp-purifycss');
var uglify = require('gulp-uglify');
var markdown = require('markdown');
var gulpUtil = require('gulp-util');
var sequence = require('run-sequence');
var rename = require('gulp-rename');
var responsive = require('gulp-responsive');
var rsync = require('gulp-rsync');
var watch = require('gulp-watch');

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

/* ******* */
/* Logging */
/* ******* */

function logMessage(message) {
  gulpUtil.log(gulpUtil.colors.blue(message));
}

function logError(message) {
  gulpUtil.log(gulpUtil.colors.red(message));
}

/* ***** */
/* Tasks */
/* ***** */

// Purify CSS
// gulp.task('css', function() {
//   return gulp.src('./public/app/example.css')
//     .pipe(purify(['./public/app/**/*.js', './public/**/*.html']))
//     .pipe(gulp.dest('./dist/'));
// });

// Minify CSS
/*
      './css/*.css',
      '!./css/*.min.css'
*/
gulp.task('minify-css', function() {
  return gulp.src(paths.src.css)
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.output.css))
		.on('finish', function() {
			logMessage('Completed task: minify-css');
		});    
});

gulp.task('css-inline', function() {
	return gulp.src(paths.src.html)
	  .pipe(inlineSource({
      rootpath: paths.src.base
    }))
		.pipe(inlineCss({
			preserveMediaQueries: true
		}))
		.pipe(gulp.dest(paths.output.html))
		.on('finish', function() {
			logMessage('Completed task: css-inline');
		});
});

// Minify JavaScript
gulp.task('minify-js', function() {
  return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
		.pipe(gulp.dest(paths.output.js))
		.on('finish', function() {
			logMessage('Completed task: minify-js');
		});
});

// gulp.task('default', function () {
//   return gulp.src('src/*.{png,jpg}')
//     .pipe(responsive({
//       'background-*.jpg': {
//         width: 700,
//         quality: 50
//       },
//       'cover.png': {
//         width: '50%',
//         // convert to jpeg format
//         format: 'jpeg',
//         rename: 'cover.jpg'
//       },
//       // produce multiple images from one source
//       'logo.png': [
//         {
//           width: 200
//         },{
//           width: 200 * 2,
//           rename: 'logo@2x.png'
//         }
//       ]
//     }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('include-html', function() {
  /* return gulp.src([paths.src.html, '!' + paths.src.includes]) */
  return gulp.src(paths.src.html)
	  .pipe(includeFile({
		  prefix: '@@',
		  basepath: paths.src.includes
		}))
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: include-html');
		});		    
});

gulp.task('copy-css', function() {
	return gulp.src(paths.src.css)
		.pipe(gulp.dest(paths.output.css))
		.on('finish', function() {
			logMessage('Completed task: copy-css');
		});
});

gulp.task('copy-favicon', function() {
	return gulp.src(paths.src.favicon)
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: copy-favicon');
		});
});

gulp.task('copy-htaccess', function() {
	return gulp.src(paths.src.htaccess)
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: copy-htaccess');
		});
});

gulp.task('copy-html', function() {
	return gulp.src(paths.src.html)
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: copy-html');
		});
});

gulp.task('copy-images', function() {
	return gulp.src(paths.src.images)
		.pipe(gulp.dest(paths.output.images))
		.on('finish', function() {
			logMessage('Completed task: copy-images');
		});
});

gulp.task('copy-js', function() {
	return gulp.src(paths.src.js)
		.pipe(gulp.dest(paths.output.js))
		.on('finish', function() {
			logMessage('Completed task: copy-js');
		});
});

gulp.task('copy-manifest', function() {
	return gulp.src(paths.src.manifest)
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: copy-manifest');
		});
});

gulp.task('copy-sw', function() {
	return gulp.src(paths.src.sw)
		.pipe(gulp.dest(paths.output.base))
		.on('finish', function() {
			logMessage('Completed task: copy-sw');
		});
});

gulp.task('copy-vendor', function() {
	return gulp.src(paths.src.vendor)
		.pipe(gulp.dest(paths.output.vendor))
		.on('finish', function() {
			logMessage('Completed task: copy-vendor');
		});
});

/* * * * * * * * * * * * */

gulp.task('test', function() {
  /* return gulp.src([paths.src.test, '!' + paths.src.includes + '/**']) */	
  return gulp.src(paths.src.test)
	  .pipe(includeFile({
		  prefix: '@@',
		  basepath: paths.src.base,
		  context: {
		  	mdfile: '\'md/test.md\''
		  },
		  filters: {
        markdown: markdown.parse
      }
		}))
		.pipe(gulp.dest(paths.output.test));	    
});

/* *********** */
/* Clean Tasks */
/* *********** */

gulp.task('clean', function() {
  return del([
    paths.output.base
  ]);
});

/* ************** */
/* Combined Tasks */
/* ************** */

gulp.task('build', function() {
	sequence(
		'minify-css',		
		'copy-favicon',
		'include-html',
		'copy-htaccess',		
		'copy-images',
		'minify-js',			
		'copy-manifest',
		'copy-sw',
		'copy-vendor'			
	);		
});

/* ************ */
/* Deploy Tasks */
/* ************ */

gulp.task('deploy', function() {
  return gulp.src([paths.output.base, '.htaccess'])
    .pipe(rsync({
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

gulp.task('server', function() {
  connect.server({
  	root: paths.output.base,
  	livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch([paths.src.base + '**/*'], ['build']);
});

gulp.task('default', function() {
	sequence(
		'clean',
		'build',
		['server', 'watch']
	);
});
