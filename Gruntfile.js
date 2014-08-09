module.exports = function(grunt) {

    grunt.initConfig({

        /**
         * @property pkg
         * @type {Object}
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * @property jshint
         * @type {Object}
         */
        jshint: {
            all: 'module/*.js',
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /**
         * @property uglify
         * @type {Object}
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> by <%= pkg.author %> created on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['module/*.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        /**
         * @property compress
         * @type {Object}
         */
        compress: {
            main: {
                options: {
                    archive: 'releases/<%= pkg.version %>.zip'
                },
                files: [
                    { flatten: true, src: 'dist/<%= pkg.name %>.js', dest: './', filter: 'isFile' }
                ]
            }
        },

        /**
         * @property karma
         * @type {Object}
         */
        karma: {
            unit: {
                configFile: 'KarmaUnit.js',
                background: false,
                browsers: ['Firefox', 'PhantomJS']
            }
        },

        /**
         * @property copy
         * @type {Object}
         */
        copy: {
            vendor: {
                expand: true,
                flatten: true,
                src: ['module/*'],
                dest: 'example/js/vendor/<%= pkg.name %>',
                filter: 'isFile'
            }
        },

        /**
         * @property concat
         * @type {Object}
         */
        concat: {
            dist: {
                src: ['module/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['copy', 'concat', 'uglify']);
    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('default', ['jshint', 'karma', 'copy', 'concat', 'uglify']);

};