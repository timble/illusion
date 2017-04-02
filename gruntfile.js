module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig({


        // Compile sass files
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'demo/css/style.css': 'demo/scss/style.scss'
                }
            }
        },


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "demo/css/*.css",
                        "demo/index.html"
                    ]
                },
                options: {
                    server: {
                        baseDir: "./demo/"
                    },
                    port: 4558, // Illu(sion) on phone numpad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: false
                }
            }
        },


        // CSSmin
        cssmin: {
            options: {
                roundingPrecision: -1,
                sourceMap: true,
                level: 2
            },
            site: {
                files: {
                    'demo/css/style.css': 'demo/css/style.css'
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
                src: 'demo/css/*.css',
                dest: 'demo/css/'
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,
                "dest": "demo/js/modernizr.js",
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
            updateCanIUse: {
                command: 'npm update caniuse-db'
            }
        },


        // Watch files
        watch: {
            sass: {
                files: [
                    'demo/scss/*.scss',
                    'demo/scss/**/*.scss'
                ],
                // tasks: ['sass', 'cssmin', 'autoprefixer'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('default', ['shell', 'modernizr', 'browserSync', 'watch']);

};