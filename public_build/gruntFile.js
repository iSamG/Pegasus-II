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
    grunt.registerTask('php', ['concat:index']);
    grunt.registerTask('css', ['concat:stylesheets']);
    grunt.registerTask('app', ['concat:app_files']);
    grunt.registerTask('load', ['app', 'htmls', 'php']);
    grunt.registerTask('scripts', ['concat:scripts']);
    grunt.registerTask('vendors', ['concat:vendors']);
    grunt.registerTask('cache', ['concat:cache']);
    //grunt.registerTask('dev', ['default']);
    //grunt.registerTask('prod', ['default','uglify']);
    //grunt.registerTask('test', ['default']);

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
        distdir: '../public/punters',
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
        ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
        src: {
            html: ['src/punter.html'],
            css: ['stylesheets/**.css', 'stylesheets/responsive.css', 'vendor/**/*.css'],
            assets : ['assets'],
            app_files : ['src/app/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            tpl: {
                app: ['src/app/**/*.tpl.html'],
                common: ['src/common/**/*.tpl.html']
            },
            jsCommon : ['src/common/**/*.js'],
            specs: ['test/**/*.spec.js'],
            scenarios: ['test/**/*.scenario.js'],
            scripts: ['scripts/*.js'],
            vendors : ['vendor/**/*.js', '!vendor/angular/angular.js', '!vendor/jquery/jquery.js' ]
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
                files: [{ dest: '<%= distdir %>', src: ['!b2w_public.appcache','assets/**'], expand: true }]
            }
        },
        karma: {
            unit: { options: karmaConfig('test/config/unit.js') },
            watch: { options: karmaConfig('test/config/unit.js', { singleRun:false, autoWatch: true}) }
        },
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            },
            common: {
                options: {
                    base: 'src/common'
                },
                src: ['<%= src.tpl.common %>'],
                dest: '<%= distdir %>/templates/common.js',
                module: 'templates.common'
            }
        },
        concat:{
            index: {
                src: ['<%= src.html %>'],
                dest: '<%= destinations.php_views %>/public_home.php',
                options: {
                    force : true,
                    process: true
                }
            },
            error_page: {
                src: ['src/not_a_punter.html'],
                dest: '<%= destinations.php_views %>/404.blade.php',
                options: {
                    force : true,
                    process: true
                }
            },
            cache: {
                files : {
                    '<%= distdir %>/b2w_public.appcache' : 'assets/b2w_public_cache.txt'
                },
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
                    '<%= distdir %>/<%= pkg.name_lowercase %>.css' : '<%= src.css %>'
                }
            },
            angular: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['vendor/angular/angular.min.js'],
                dest: '<%= distdir %>/angular.js'
            },
            app_files : {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.app_files %>', '<%= src.jsCommon %>'],
                dest: '<%= distdir %>/ng-<%= pkg.name_lowercase %>.js'
            },
            jquery: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
            },
            scripts: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.scripts %>'],
                dest: '<%= distdir %>/<%= pkg.name_lowercase %>-scripts.js'
            },
            vendors: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.vendors %>', '!vendor/angular/angular.min.js', '!vendor/jquery/*.js'],
                dest: '<%= distdir %>/ng-<%= pkg.name_lowercase %>-vendors.js'
            }
        },
        uglify: {
            dist:{
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            },
            angular: {
                src:['<%= concat.angular.src %>'],
                dest: '<%= distdir %>/angular.js'
            },
            jquery: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
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
