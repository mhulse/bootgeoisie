/* jslint es3: false */

module.exports = function (grunt) {
	
	'use strict';

	var configBridge = grunt.file.readJSON('./bower_components/bootstrap/grunt/configBridge.json', { encoding: 'utf8' });
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		builddir: '.',
		
		buildtheme: '',
		
		banner: '/*!\n' +
		        ' * <%= pkg.name %> v<%= pkg.version %>\n' +
		        ' * Homepage: <%= pkg.homepage %>\n' +
		        ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
		        ' * Licensed under <%= pkg.license %>\n' +
		        ' * Based on Bootstrap\n' +
		        ' */\n',
		
		bootgeoisie: {
			custom:{}
		},
		
		clean: {
			build: {
				src: ['*/build.scss', '!global/build.scss']
			}
		},
		
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			dist: {
				src: [],
				dest: ''
			}
		},
		
		less: {
			dist: {
				options: {
					compress: false,
					strictMath: true
				},
				files: {}
			}
		},
		
		autoprefixer: {
			options: {
				browsers: configBridge.config.autoprefixerBrowsers
			},
			dist: {
				src: '*/bootstrap.css'
			}
		},
		
		watch: {
			files: ['*/index.html'],
			tasks: 'build',
			options: {
				livereload: true,
				nospawn: true
			}
		},
		
		connect: {
			base: {
				options: {
					port: 3000,
					livereload: true,
					open: true
				}
			},
			keepalive: {
				options: {
					port: 3000,
					livereload: true,
					keepalive: true,
					open: true
				}
			}
		}
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//----------------------------------
	
	grunt.registerTask('none', function() {});
	
	grunt.registerTask('build', 'build a theme from scss', function(theme, compress) {
		
		var concatSrc;
		var concatDest;
		var scssDest;
		var scssSrc;
		var files = {};
		var dist = {};
		var valid;
		
		theme = ((theme === undefined) ? grunt.config('buildtheme') : theme);
		valid = (grunt.file.exists(theme, '_variables.scss') && grunt.file.exists(theme, '_bootgeoisie.scss'));

		// Cancel the build (without failing) if this directory is not a valid theme:
		if (valid) {
			
			concatSrc = 'global/build.scss';
			concatDest = theme + '/build.scss';
			scssDest = '<%=builddir%>/' + theme + '/bootstrap.css';
			scssSrc = [
				theme + '/' + 'build.scss'
			];
			compress = ((compress === undefined) ? true : compress);
			files[scssDest] = scssSrc;
			
			grunt.config('concat.dist', {
				src: concatSrc,
				dest: concatDest
			});
			grunt.config('sass.dist.files', files);
			grunt.config('sass.dist.options.style', 'expanded');
			grunt.config('sass.dist.options.precision', 8);
			grunt.config('sass.dist.options.unix-newlines', true);
	  
			grunt.task.run([
				'concat',
				'sass:dist',
				'prefix:' + scssDest,
				'clean:build',
				(compress ? 'compress:' + scssDest + ':' + '<%=builddir%>/' + theme + '/bootstrap.min.css' : 'none')
			]);
			
		}
		
	});
	
	grunt.registerTask('prefix', 'autoprefix a generic css', function(fileSrc) {
		
		grunt.config('autoprefixer.dist.src', fileSrc);
		grunt.task.run('autoprefixer');
		
	});
	
	grunt.registerTask('compress', 'compress a generic css', function(fileSrc, fileDst) {
		
		var files = {};
		
		files[fileDst] = fileSrc;
		
		grunt.log.writeln('compressing file ' + fileSrc);
		
		grunt.config('sass.dist.files', files);
		grunt.config('sass.dist.options.style', 'compressed');
		
		grunt.task.run(['sass:dist']);
		
	});
	
	grunt.registerTask('bootgeoisie', 'build a theme', function (theme) {
		
		var t = theme;
		
		if ( ! t) {
			
			for (t in grunt.config('bootgeoisie')) {
				
				grunt.task.run('build:' + t);
				
			}
			
		} else {
			
			grunt.task.run('build:' + t);
			
		}
		
	});
	
	grunt.event.on('watch', function(action, filepath) {
		
		var path = require('path');
		var theme = path.dirname(filepath);
		
		grunt.config('buildtheme', theme);
		
	});
	
	grunt.registerTask('server', 'connect:keepalive');
	grunt.registerTask('default', ['connect:base', 'watch']);
	
};
