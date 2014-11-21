module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/build'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: '<%= assetsPath %>/dev/js/main.js'
        dist: '<%= assetsPath %>/dist/js/main.min.js'

    coffee:
      compile:
        files:
          '<%= assetsPath %>/dev/js/main.js': 'app/**/*.coffee'

    stylus:
      options:
        compress: false
      compile:
        files:
          '<%= assetsPath %>/dev/css/main.css': 'app/views/**/*.styl'

    handlebars:
      compile:
        options:
          namespace: "Templates"
        files:
          '<%= assetsPath %>/dev/js/templates.js': 'app/views/templates/**/*.hbs'

    browserify:
      dist:
        files:
          '<%= assetsPath %>/dev/js/test.js': [
            '<%= assetsPath %>/dev/js/main.js',
            '<%= assetsPath %>/dev/js/templates.js'
          ]

  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'

  grunt.registerTask 'default', ['coffee', 'handlebars', 'browserify', 'uglify', 'stylus']