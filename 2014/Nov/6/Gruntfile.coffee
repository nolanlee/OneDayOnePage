module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/build'

    #压缩
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        src: '<%= assetsPath %>/dev/js/main.js'
        dist: '<%= assetsPath %>/dest/js/main.min.js'

    #编译coffee
    coffee:
      compile:
        files:
          '<%= assetsPath %>/dev/js/main.js': 'app/**/*.coffee'

    #编译stulus
    stylus:
      options:
        compress: false
      compile:
        files:
          '<%= assetsPath %>/dev/css/main.css': 'app/views/**/*.styl'

    #编译hbs
    handlebars:
      compile:
        options:
          namespace: "Templates"
        files:
          '<%= assetsPath %>/dev/js/templates.js': 'app/views/templates/**/*.hbs'

    #编译commonjs
    browserify:
      dist:
        files:
          '<%= assetsPath %>/dev/js/main.js': [
            'app/**/*.coffee',
            'app/**/*.hbs'
          ]
        options:
          transform: ['coffeeify', 'hbsfy']

  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'

  grunt.registerTask 'build', ['coffee', 'handlebars', 'uglify', 'stylus']
  grunt.registerTask 'build, too', ['browserify', 'stylus', 'uglify']
  grunt.registerTask 'default', 'build, too'