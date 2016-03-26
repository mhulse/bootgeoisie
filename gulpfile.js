/* jshint node:true */

(function() {
	
	'use strict';
	
	const gulp = require('gulp');
	const util = require('gulp-util');
	const prefix = require('gulp-autoprefixer');
	const jshint = require('gulp-jshint');
	const rename = require('gulp-rename');
	const sass = require('gulp-sass');
	const maps = require('gulp-sourcemaps');
	const connect = require('gulp-connect');
	const type = util.env.type; // Set this using `--type prod`, for example.

	gulp.task('connect', function() {
		
		connect.server({
			root: '.',
			livereload: true,
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
		
		gulp
			.src([
				'bootstrap.scss',
			])
			.pipe(maps.init())
			.pipe(sass(options.sass)
			.on('error', sass.logError))
			.pipe(maps.write())
			.pipe(prefix(options.prefix))
			.pipe(rename('bootstrap.css'))
			.pipe(gulp.dest('.'))
			.pipe(connect.reload());
		
	});

	gulp.task('scripts', function() {
		
		gulp
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
			])
			.on('change', function(event) {
				console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
			});
		
		gulp
			.watch('**/*.scss', [
				'styles',
			]);
		
	});

	gulp.task('default', [
		'watch',
	]);
	
}());
