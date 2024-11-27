module.exports = function( grunt ) {

  grunt.initConfig({
    /* Location of the project's package.JSON file */
    pkg: grunt.file.readJSON( 'package.json' ),

    /**
     * Sass task
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none', /* This file would tell where all the different components came from */
        },
        files: {
          'style.css': 'scss/style.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'style.min.css': 'scss/style.scss'
        }
      }
    },

    /**
     * Autoprefixer task
     */
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: '*.css',
        dest: ''
      }
    },

    /**
     * BabelJS task
     * @link https://babeljs.io/docs/usage/api/
     */
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
      dist: {
        files: {
          'js/app.min.js': 'js/app.js'
        }
      }
    },

    /**
     * Watch task
     */
    watch: {
      css: {
        files: '**/*.scss', /* What files are we watching? */
        tasks: [ 'sass','autoprefixer' ]     /* Run this task (above) */
      },
      js: {
        files: 'js/react-app.js',
        tasks: [ 'babel' ]
      },
      scripts: {
        files: ['js/app.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
        },
      },
    },
  });
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-babel' );
  grunt.registerTask( 'default', ['babel', 'watch'] );
}
