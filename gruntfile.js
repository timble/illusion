module.exports = function(grunt) {

    // measures the time each task takes
    require("time-grunt")(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require("jit-grunt")(grunt, {
        versioncheck: "grunt-version-check"
    });

    const sass = require("sass");

    // grunt config
    grunt.initConfig({
        // Copy bower files
        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        src: ["docs/css/*.css"],
                        dest: "docs/_site/css",
                        flatten: true
                    }
                ]
            }
        },

        // Compile sass files
        sass: {
            options: {
                implementation: sass,
                outputStyle: "expanded"
            },
            dist: {
                files: {
                    "docs/css/style.css": "docs/_scss/style.scss",
                    "tests/tests.css": "tests/tests.scss"
                }
            }
        },

        // PostCSS
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({overrideBrowserslist: 'last 2 versions'})
                ]
            },
            files: {
                expand: true,
                flatten: true,
                src: "docs/css/*.css",
                dest: "docs/css/"
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
                    "docs/css/style.css": "docs/css/style.css"
                }
            }
        },

        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "docs/_site/*.*",
                        "docs/_site/css/*.css",
                        "docs/_docs/js/*.js"
                    ]
                },
                options: {
                    port: 4558, // Illu(sion) on phone numpad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: true,
                    server: {
                        baseDir: "docs/_site"
                    }
                }
            }
        },

        // Modernizr
        modernizr: {
            dist: {
                cache: true,
                dest: "docs/js/modernizr.js",
                options: ["html5shiv", "prefixedCSS", "setClasses"],
                uglify: true,
                tests: ["flexbox", "flexwrap"],
                crawl: false,
                customTests: []
            }
        },

        // Uglify
        uglify: {
            options: {
                sourceMap: false
            },
            build: {
                files: {
                    "docs/js/scripts.js": [
                        "node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js",
                        "node_modules/gumshoejs/dist/gumshoe.polyfills.min.js",
                        "docs/_scripts/main.js"
                    ]
                }
            }
        },

        // Shell commands
        shell: {
            jekyllBuild: {
                command:
                    "cd docs; bundle exec jekyll build --safe --future --incremental --config _config.yml,_config.local.yml"
            }
        },

        // Watch files
        watch: {
            css: {
                files: [
                    "docs/_scss/*.scss",
                    "docs/_scss/**/*.scss",
                    "scss/*.scss",
                    "scss/**/*.scss",
                    "scss/**/**/*.scss",
                    "scss/**/**/**/*.scss",
                    "tests/*.scss",
                    "tests/**/*.scss",
                    "tests/**/**/*.scss"
                ],
                tasks: ["sass", "postcss", "cssmin", "copy:css"],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            javascript: {
                files: ["docs/_scripts/*.js"],
                tasks: ["uglify"],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            jekyll: {
                files: [
                    "docs/_includes/*.*",
                    "docs/_includes/**/*.*",
                    "docs/_includes/**/**/*.*",
                    "docs/_layouts/*.*",
                    "docs/images/*.*",
                    "docs/images/**/*.*",
                    "docs/images/**/**/*.*",
                    "docs/documentation/*.*",
                    "docs/documentation/*.*",
                    "docs/examples/**/*.*",
                    "docs/examples/*.*",
                    "docs/faq/**/*.*",
                    "docs/faq/*.*",
                    "docs/index.md",
                    "docs/config.yml"
                ],
                tasks: ["shell:jekyllBuild"],
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }
    });

    // The dev task will be used during development
    grunt.registerTask("default", [
        "shell",
        "modernizr",
        "browserSync",
        "watch"
    ]);
};
