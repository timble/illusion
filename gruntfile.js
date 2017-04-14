module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig({


        // Copy bower files
        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        src: ['site/css/*.css'],
                        dest: 'site/_site/css',
                        flatten: true
                    }
                ]
            }
        },


        // Compile sass files
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'site/css/style.css': 'site/_scss/style.scss'
                }
            }
        },


        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions']
            },
            files: {
                expand: true,
                flatten: true,
                src: 'site/css/*.css',
                dest: 'site/css/'
            }
        },


        // CSSmin
        cssmin: {
            options: {
                roundingPrecision: -1,
                sourceMap: false,
                level: 2,
                mergeSemantically: true,
                restructureRules: true,
                mergeNonAdjacentByBody: true,
                mergeMediaQueries: true
            },
            site: {
                files: {
                    'site/css/style.css': 'site/css/style.css'
                }
            }
        },


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "site/_site/*.*",
                        "site/_site/css/*.css",
                        "site/_site/js/*.js"
                    ]
                },
                options: {
                    port: 4558, // Illu(sion) on phone numpad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: true,
                    server: {
                        baseDir: "site/_site"
                    }
                }
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,
                "dest": "site/js/modernizr.js",
                "options": [
                    "html5shiv",
                    "prefixedCSS",
                    "setClasses"
                ],
                "uglify": true,
                "tests": [
                    'flexbox',
                    'flexwrap'
                ],
                "crawl" : false,
                "customTests" : []
            }
        },


        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'cd site; bundle exec jekyll build --safe --future --incremental --config _config.yml,_config.local.yml'
            }
        },


        // Watch files
        watch: {
            css: {
                files: [
                    'site/_scss/*.scss',
                    'site/_scss/**/*.scss',
                    'scss/*.scss',
                    'scss/**/*.scss',
                    'scss/**/**/*.scss',
                    'scss/**/**/**/*.scss'
                ],
                tasks: ['sass', 'cssmin', 'autoprefixer', 'copy:css'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            jekyll: {
                files: [
                    'site/_includes/*.*',
                    'site/_includes/**/*.*',
                    'site/_layouts/*.*',
                    'site/images/*.*',
                    'site/images/**/*.*',
                    'site/images/**/**/*.*',
                    'site/docs/**/*.*',
                    'site/docs/*.*',
                    'site/examples/**/*.*',
                    'site/examples/*.*',
                    'site/index.md',
                    'site/config.yml'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('default', ['shell', 'modernizr', 'browserSync', 'watch']);

};