module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task.
    grunt.registerTask('default', ['clean','copy','html2js','concat']);
    grunt.registerTask('htmls', ['html2js']);
    grunt.registerTask('php', ['concat:html']);
    grunt.registerTask('app', ['concat:app_files']);
    grunt.registerTask('load', ['app', 'htmls', 'php']);
    grunt.registerTask('css', ['concat:stylesheets']);
    grunt.registerTask('vendors', ['concat:vendors']);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });

    var karmaConfig = function(configFile, customOptions) {
        var options = { configFile: configFile, keepalive: true };
        var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };

    // Project configuration.
    grunt.initConfig({
        distdir: '../public/front_app',
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
        ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',

        js_php_banner : '<?php header("Cache-Control: public, s-maxage=604899999900 max-age=604899999900"); header("Expires: Sun, 25-Jun-2030 19:14:07 GMT"); ' +
        '$etag = \'"\' .  md5(<%= new Date().getTime() %>) . \'"\';$etag_header =\'Etag: \' . $etag;header($etag_header);if (isset($_SERVER["HTTP_IF_NONE_MATCH"]) and $_SERVER["HTTP_IF_NONE_MATCH"]==$etag) {header("HTTP/1.1 304 Not Modified");exit();}header("Content-Type: text/javascript");header("last-modified: Sun, 25-Jun-2000 19:14:07 GMT");if (substr_count($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")) ' +
        'ob_start("ob_gzhandler"); else ob_start();?>',

        css_php_banner : '<?php header("Cache-Control: public, s-maxage=604899999900 max-age=604899999900"); header("Expires: Sun, 25-Jun-2030 19:14:07 GMT"); ' +
        '$etag = \'"\' .  md5(<%= new Date().getTime() %>) . \'"\';$etag_header =\'Etag: \' . $etag;header($etag_header);if (isset($_SERVER["HTTP_IF_NONE_MATCH"]) and $_SERVER["HTTP_IF_NONE_MATCH"]==$etag) {header("HTTP/1.1 304 Not Modified");exit();}header("Content-Type: text/css");header("last-modified: Sun, 25-Jun-2000 19:14:07 GMT");if (substr_count($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")) ' +
        'ob_start("ob_gzhandler"); else ob_start();?>',

        src: {
            html: ['src/public_index.html'],
            survey_html: ['src/public_survey.html'],
            css: ['stylesheets/**.css', 'stylesheets/responsive.css', 'vendor/**/*.css'],
            assets : ['assets'],
            app_files : ['src/app/**/*.js'],
            take_survey_files : ['src/survey/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            tpl: {
                app: ['src/app/**/*.tpl.html'],
                common: ['src/common/**/*.tpl.html']
            },
            jsCommon : ['src/common/**/*.js'],
            specs: ['test/**/*.spec.js'],
            scenarios: ['test/**/*.scenario.js'],
            scripts : ['vendor/jquery/*.js', 'vendor/angular/*.js', 'vendor/**/*.js',
                '!vendor/formbuilder/formbuilder.js',
                'scripts/*.js' ]
        },
        destinations : {
            php_views : ['../resources/views']
        },
        clean: {
            options  : { force : true },
            src:  ['<%= distdir %>*']
        },
        copy: {
            assets: {
                files: [{ dest: '<%= distdir %>', src: ['assets/**'], expand: true }]
            }
        },
        karma: {
            unit: { options: karmaConfig('test/config/unit.js') },
            watch: { options: karmaConfig('test/config/unit.js', { singleRun:false, autoWatch: true}) }
        },
        html2js: {
            app: {
                options: {
                    fileHeaderString: '<%= banner %>',
                    singleModule: true,
                    useStrict: true,
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true
                    },
                    base: 'src/app'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            },
            common: {
                options: {
                    fileHeaderString: '<%= banner %>',
                    singleModule: true,
                    useStrict: true,
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true
                    },
                    base: 'src/common'
                },
                src: ['<%= src.tpl.common %>'],
                dest: '<%= distdir %>/templates/common.js',
                module: 'templates.common'
            }
        },
        concat:{
            html: {
                src: ['<%= src.html %>'],
                dest: '<%= destinations.php_views %>/public_home.php',
                options: {
                    force : true,
                    process: true
                }
            },
            survey_html: {
                src: ['<%= src.survey_html %>'],
                dest: '<%= destinations.php_views %>/survey_page.php',
                options: {
                    force : true,
                    process: true
                }
            },
            stylesheets : {
                options: {
                    banner: "<%= banner %>"
                },
                files : {
                    '<%= distdir %>/<%= pkg.name %>.css' : '<%= src.css %>'
                }
            },
            app_files : {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.app_files %>', '<%= src.jsCommon %>'],
                dest: '<%= distdir %>/<%= pkg.name %>.js'
            },
            vendors: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.scripts %>','vendor/formbuilder/formbuilder.js'],
                dest: '<%= distdir %>/scripts.js'
            },
            take_survey: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.take_survey_files %>'],
                dest: '<%= distdir %>/<%= pkg.name %>-survey.js'
            }
        },
        uglify: {
            scripts:{
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= distdir %>/scripts.js'],
                dest:'<%= distdir %>/scripts.min.js'
            }
        },
        watch:{
            all: {
                files:['<%= src.js %>', '<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'],
                tasks:['default','timestamp']
            },
            build: {
                files:['<%= src.js %>', '<%= src.specs %>', '<%= src.lessWatch %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'],
                tasks:['build','timestamp']
            }
        },
        jshint:{
            files:['gruntFile.js', '<%= src.js %>', '<%= src.jsTpl %>', '<%= src.specs %>', '<%= src.scenarios %>'],
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        }
    });

};
