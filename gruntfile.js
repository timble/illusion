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
                    'docs/css/style.css': 'docs/scss/style.scss'
                }
            }
        },


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "docs/css/*.css",
                        "docs/index.html"
                    ]
                },
                options: {
                    server: {
                        baseDir: "./docs/"
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
                    'docs/css/style.css': 'docs/css/style.css'
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
                src: 'docs/css/*.css',
                dest: 'docs/css/'
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,
                "dest": "docs/js/modernizr.js",
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
                    'docs/scss/*.scss',
                    'docs/scss/**/*.scss',
                    'scss/*.scss',
                    'scss/**/*.scss',
                    'scss/**/**/*.scss',
                    'scss/**/**/**/*.scss'
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