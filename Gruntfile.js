module.exports = function (grunt) {


    /* Grunt config */
    /* ============ */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* Linting! */
        /* ======== */
        jshint: {
            options: {
                jshintrc: true
            },
            files: ['app/assets/scripts/**/*.js']
        },

        /* Clean Files! */
        /* ======== */
        clean: {
            dist: {
                src: ['dist']
            }
        },

        /* Copy Files! */
        /* ======== */
        copy: {
            // css: {
            //     src: 'app/assets/css/app.css',
            //     dest: 'dist/assets/css/app.css'
            // },
            fonts: {
                files: [
                    {
                        expand: true,
                        src: 'assets/fonts/*',
                        dest: 'dist/',
                        filter: 'isFile',
                        cwd: 'app/'
                    }
                ]
            },
            img: {
                files: [
                    {
                        expand: true,
                        src: 'assets/img/*',
                        dest: 'dist/',
                        filter: 'isFile',
                        cwd: 'app/'
                    }
                ]
            },
            json: {
                files: [
                    {
                        expand: true,
                        src: 'api/*',
                        dest: 'dist/',
                        filter: 'isFile',
                        cwd: 'app/'
                    }
                ]
            }
        },

        /* Concatenation! */
        /* ============== */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'app/assets/scripts/**/*.js',
                dest: 'dist/assets/scripts/app.js'
            },
            vendor: {
                src: ['app/assets/vendor/js/angular/angular.js', 'app/assets/vendor/**/*.js', '!app/assets/vendor/**/*.min.js'],
                dest: 'dist/assets/scripts/vendor.js'
            }
        },

        /* JS Minification! */
        /* ============= */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/assets/scripts/app.min.js': ['<%= concat.dist.dest %>']
                }
            },
            vendor: {
                files: {
                    'dist/assets/scripts/vendor.min.js': ['<%= concat.vendor.dest %>']
                }
            },
            views: {
                files: {
                    'dist/assets/scripts/views.min.js': 'app/assets/scripts/views.js'
                }
            }
        },

        /* CSS Minification! */
        /* ============= */
        cssmin: {
            dist: {
                files: {
                    'dist/assets/css/app.min.css': ['dist/assets/css/app.css']
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['app/index.html']
                }
            }
        },

        /* Unit testing */
        /* ============ */
        karma: {
            raw: {
                configFile: 'karma.conf.js',
                options: {
                    browsers: ['PhantomJS']
                }
            },
            built: {
                configFile: 'karma.conf.js',
                options: {
                    browsers: ['PhantomJS']
                }
            }
        },

        /* Compass configuration! */
        /* ====================== */
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'app/assets/css',
                    config: 'config.rb'
                }
            },
            prod: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'dist/assets/css',
                    config: 'config.rb',
                    outputStyle: 'compressed',
                    imagesDir: "dist/assets/img"
                }
            }
        },

        /* Angular template compilation! */
        /* ============================= */
        ngtemplates: {
            options: {

                url: function (url) {
                    var name = url.split('/');
                    return name[name.length - 1];
                }
            },
            BriocheApp: {
                module: 'BriocheApp',
                src: 'app/views/*.html',
                dest: 'app/assets/scripts/views.js'
            }
        },

        /* Watch task!
         /* ========================= */
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['compass:dist']
            },
            angular: {
                files: ['app/views/**/*.html'],
                tasks: ['ngtemplates']
            }
        }
    });

    /* Register the tasks we want grunt to actually use
     /* ========================= */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-processhtml');

    /* TASK ALIASES */
    grunt.registerTask('build', [ 'clean', 'jshint', /*'karma:raw',*/ 'ngtemplates', 'compass:prod', 'copy', 'concat', 'uglify', 'processhtml' ]);
    grunt.registerTask('templates', [ 'ngtemplates' ]);

    /* Running GRUNT without any parameters will run the following tasks
     /* ========================= */
    grunt.registerTask('default', [ 'build' ]);

};