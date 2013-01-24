/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js'],
      lib: ['grunt.js', 'js/collections/*', 'js/models/*', 'js/routers/*', 'js/views/*', 'main.js', 'app.build.js']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/FILE_NAME.js>'],
        dest: 'dist/FILE_NAME.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/FILE_NAME.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        "bitwise": true,
        "curly": true,
        "eqeqeq": true,
        "forin": false,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "noempty": true,
        "nonew": true,
        "plusplus": true,
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": false,
        "trailing": false,
        "asi": false,
        "boss": false,
        "debug": false,
        "eqnull": false,
        "es5": false,
        "esnext": false,
        "evil": false,
        "expr": false,
        "funcscope": false,
        "globalstrict": false,
        "iterator": false,
        "lastsemic": false,
        "laxbreak": false,
        "laxcomma": false,
        "loopfunc": false,
        "multistr": false,
        "onecase": false,
        "proto": false,
        "regexdash": false,
        "scripturl": false,
        "smarttabs": false,
        "shadow": false,
        "sub": false,
        "supernew": false,
        "validthis": false,
        "browser": true,
        "couch": false,
        "devel": true,
        "jquery": true,
        "node": true,
        "nonstandard": false,
        "wsh": false,
        "nomen": false,
        "onevar": false,
        "passfail": false,
        "white": true,
        "maxerr": 100,
        "predef": ["forge", "moment", "Invoke", "Handlebars", "_", "$", "Backbone", "utils", "Mustache", "App", "FB", "Facebook"],
        "indent": 2
      },
      globals: {
        jQuery: true,
        define: true,
        console: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};

// jshint docs: http://www.jshint.com/docs/

// jshintrc: '~/.jshintrc'
