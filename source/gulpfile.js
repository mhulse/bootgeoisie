/* jshint node:true */

'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const prefix = require('gulp-autoprefixer');
const jshint = require('gulp-jshint');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const flatten = require('gulp-flatten');
const del = require('del');
const type = util.env.type; // Set this using `--type prod`, for example.
const root = '../';

gulp.task('connect', function() {
	
	return connect
		.server({
			root: root,
			livereload: true,
			//port: 80,
			//host: 'gulp.dev',
		});
	
});

gulp.task('styles', function() {
	
	let options = {
		sass: {
			errLogToConsole: true,
			outputStyle: ((type == 'prod') ? 'compressed' : 'expanded'),
			precision: 14,
		},
		prefix: {
			browsers: [
				'last 2 versions',
				'> 5%',
				'Firefox ESR',
			],
		},
	};
	
	return gulp
		.src([
			'bootstrap.scss',
		])
		.pipe(maps.init())
		.pipe(sass(options.sass)
		.on('error', sass.logError))
		.pipe(maps.write())
		.pipe(prefix(options.prefix))
		.pipe(rename('bootstrap.css'))
		.pipe(gulp.dest(root))
		.pipe(connect.reload());
	
});

gulp.task('scripts', function() {
	
	return gulp
		.src('gulpfile.js')
		.pipe(jshint({
			lookup: true,
		}))
		.pipe(jshint.reporter('jshint-stylish'));
	
});

gulp.task('watch', [
	'scripts',
	'styles',
	'connect',
], function() {
	
	gulp
		.watch('gulpfile.js', [
			'scripts'
		]);
	
	gulp
		.watch('**/*.scss', [
			'styles',
		]);
	
	return gulp;
	
});

gulp.task('clean', function() {
	
	return del([
		root + 'fonts/',
		root + 'bootstrap.js',
	], {
		force: true
	});
	
});

gulp.task('files', [
	'clean',
], function() {
	
	let twbs = 'node_modules/bootstrap-sass/assets/';
	
	gulp
		.src([
			twbs + 'fonts/bootstrap/**/*.{eot,svg,ttf,woff,woff2}',
		])
		.pipe(flatten())
		.pipe(gulp.dest(root + 'fonts/'));
	
	gulp
		.src([
			twbs + 'javascripts/bootstrap' + ((type == 'prod') ? '.min' : '') + '.js',
		])
		.pipe(rename('bootstrap.js'))
		.pipe(gulp.dest(root));
	
	return gulp;
	
});

gulp.task('default', [
	'files',
	'watch',
]);
