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
    grunt.registerTask('load', ['concat:app_scripts', 'html2js']);
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
        distdirStatic: '<%= distdir %>/back_app',
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
            scripts: ['vendor/jquery/*.js',
                'vendor/bootstrap/*.js',
                'vendor/angular/*.js',
                'vendor/**/*.js',
                '!vendor/formbuilder/formbuilder.js'
            ],
            html: ['src/dashboard_index.html'],
            tpl: {
                app: ['src/app/**/*.tpl.html', 'src/common/**/*.tpl.html']
            },
            css : ['stylesheets/font*.css', 'stylesheets/boot*.css', 'stylesheets/*.css', 'vendor/**/*.css']
        },
        clean: ['<%= distdir %>/*'],
        copy: {
            assets: {
                files: [
                    { dest: '<%= distdirStatic %>/', src : '**', expand: true, cwd: 'assets/' }
                    //{ dest: '<%= distdirStatic %>/dummyloader', src : '**', expand: true, cwd: 'src/dummydata/' }
                ]
            }
        },
        karma: {
            unit: { options: karmaConfig('test/config/unit.js') },
            watch: { options: karmaConfig('test/config/unit.js', { singleRun:false, autoWatch: true}) }
        },
        html2js: {
            app: {
                options: {
                    base: 'src'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/back_app/templates.js',
                module: 'templates.app'
            }
        },
        concat:{
            html: {
                src: ['<%= src.html %>'],
                dest: '<%= distdirHtml %>/dashboard.php',
                options: {
                    process: true
                }
            },
            stylesheet : {
                files : {
                    '<%= distdirStatic %>/<%= pkg.name %>.css' : '<%= src.css %>'
                }
            },
            app_scripts: {
                src:['<%= src.js %>'],
                dest: '<%= distdirStatic %>/<%= pkg.name %>.js'
            },
            vendor_scripts: {
                src:['<%= src.scripts %>','vendor/formbuilder/formbuilder.js'],
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
            app: {
                files:['<%= src.js %>', '<%= src.tpl.app %>'],
                tasks:['load','timestamp']
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
