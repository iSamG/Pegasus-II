module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task.
//    grunt.registerTask('default', ['jshint','build','karma:unit']);
    grunt.registerTask('default', ['clean','concat','copy','html2js']);
    grunt.registerTask('ngfiles', ['concat:angular_application']);
    grunt.registerTask('build', ['clean','html2js','concat', 'copy:assets']);
    grunt.registerTask('release', ['clean','html2js','uglify','jshint','karma:unit','concat:index', 'recess:min','copy:assets']);
    grunt.registerTask('test-watch', ['karma:watch']);

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
        distdir: '../public',
        distdirStatic: '<%= distdir %>/static',
        distdirHtml: '../resources/views',
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
        ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
        src: {
            js: ['src/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            specs: ['test/**/*.spec.js'],
            scenarios: ['test/**/*.scenario.js'],
            html: ['src/index.html'],
            tpl: {
                app: ['src/app/**/*.tpl.html'],
                common: ['src/common/**/*.tpl.html']
            },
            css : ['src/stylesheets/font*.css', 'src/stylesheets/boot*.css', 'src/stylesheets/animate.css','src/stylesheets/pegasus.css',
                'src/stylesheets/*.css','src/vendor/angular-loading-bar/*.css', 'src/vendor/angular-growl-2/*.css', 'src/vendor/ng-joyride/*.css',
                'src/vendor/ng-tags-input/*.css','src/vendor/perfect-scroller/*.css']
        },
        clean: ['<%= distdir %>/*'],
        copy: {
            assets: {
                files: [
                    { dest: '<%= distdirStatic %>/', src : '**', expand: true, cwd: 'src/assets/' },
                    { dest: '<%= distdirStatic %>/dummyloader', src : '**', expand: true, cwd: 'src/dummydata/' }
                ]
            },
            fonts : {
                files: [{ dest: '<%= distdirStatic %>/fonts/', src : '**', expand: true, cwd: 'src/fonts/' }]
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
            dist:{
                options: {
                    banner: "<%= banner %>"
                },
                src: ['<%= src.js %>', '<%= src.jsTpl %>'],
                dest:'<%= distdirStatic %>/<%= pkg.name %>.js'
            },
            index: {
                src: ['src/index.html'],
                dest: '<%= distdirHtml %>/dashboard.php',
                options: {
                    process: true
                }
            },
            stylesheet : {
                files : {
                    '<%= distdirStatic %>/all-<%= pkg.name %>.css' : '<%= src.css %>'
                }
            },
            jquery: {
                src:['src/vendor/jquery/*.js'],
                dest: '<%= distdirStatic %>/jquery.js'
            },
            bootstrap: {
                src:['src/vendor/bootstrap/*.js'],
                dest: '<%= distdirStatic %>/bootstrap.js'
            },
            angular: {
                src:['src/vendor/angular/angular.js', 'src/vendor/angular/*.js'],
                dest: '<%= distdirStatic %>/angular_files.js'
            },
            angular_application: {
                src:['src/app/**/*.js'],
                dest: '<%= distdirStatic %>/<%= pkg.name %>_angular.js'
            },
            directives : {
                src:['src/common/directives/*.js'],
                dest: '<%= distdirStatic %>/directives.js'
            },
            vendors: {
                src:['src/scripts/common-script.js', 'src/vendor/google/*.js',
                    'src/vendor/tabletop/*.js','src/vendor/angular-loading-bar/*.js', 'src/vendor/angular-growl-2/*.js',
                    'src/vendor/perfect-scroller/*.js','src/vendor/moment/*.js',
                    'src/vendor/angular-file-uploader/*.js','src/vendor/ng-joyride/*.js', 'src/vendor/ngStorage/*.js','src/vendor/ng-tags-input/*.js'],
                dest: '<%= distdirStatic %>/scripts.js'
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
            bootstrap: {
                src:['vendor/angular-ui/bootstrap/*.js'],
                dest: '<%= distdir %>/bootstrap.js'
            },
            jquery: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
            },
            vendors: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
            }
        },
        watch:{
            all: {
                files:['<%= src.js %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'],
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
