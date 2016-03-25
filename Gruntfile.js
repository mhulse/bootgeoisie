/* jslint es3: false, -W070 */
/* global module:false */

module.exports = function (grunt) {
	
	'use strict';
	
	// var bridge = grunt.file.readJSON('./bower_components/bootstrap/grunt/configBridge.json', {
	// 	encoding: 'utf8'
	// });
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		banner: '/*! ' +
		        '<%= pkg.title || pkg.name %>' +
		        '<%= pkg.version ? " v" + pkg.version : "" %>' +
		        '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
		        '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
		        ' */\n',
		
		/*----------------------------------( JSHINT )----------------------------------*/
		
		/**
		 * Validate files with JSHint.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-jshint
		 * @see http://www.jshint.com/docs/
		 */
		
		jshint: {
			options: {
				jshintrc: '.jshintrc', // Defined options and globals.
			},
			all: [
				'./Gruntfile.js',
			],
		},
		
		/*----------------------------------( CLEAN )----------------------------------*/
		
		/**
		 * Clean files and folders.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-clean
		 */

		clean: [
			'bootstrap.css',
		],
		
		// concat: {
		// 	options: {
		// 		banner: '<%= banner %>',
		// 		stripBanners: false
		// 	},
		// 	dist: {
		// 		src: [
		// 			'build.scss'
		// 		],
		// 		dest: 'bootstrap.css'
		// 	}
		// },
		
		// autoprefixer: {
		// 	options: {
		// 		browsers: bridge.config.autoprefixerBrowsers
		// 	},
		// 	dist: {
		// 		src: '*/bootstrap.css'
		// 	}
		// },
		
		// watch: {
		// 	files: [
		// 		'index.html',
		// 		'theme/*.scss'
		// 	],
		// 	tasks: 'build',
		// 	options: {
		// 		livereload: true,
		// 		nospawn: true
		// 	}
		// }
		
		/*----------------------------------( SASS )----------------------------------*/
		
		/**
		 * Compile Sass to CSS.
		 *
		 * @see https://github.com/gruntjs/grunt-contrib-sass
		 * @see http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style
		 */
		
		sass: {
			options: {
				precision: 14, // How many digits of precision to use when outputting decimal numbers.
				style: 'expanded', // Output style: nested, compact, compressed, expanded.
			},
			dist: {
				options: {},
				files: {
					'bootstrap.css': 'bootgeoisie.scss',
				},
			},
		},
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('styles', 'Build the theme’s styles.', function(compress) {
		
		compress = ((compress === undefined) ? 'expanded' : 'compressed'); // `npm run grunt styles:true`
		
		grunt.log.writeln(compress);
		
		/*
		grunt.config('sass.dist.options.compress', false);
		grunt.config('sass.dist.options.style', 'expanded');
		grunt.config('sass.dist.options.unix-newlines', true);
		*/
		
	});
	
	grunt.registerTask('init', ['jshint',]);
	grunt.registerTask('default', ['init',]);
	
};
