module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/build'

    #压缩js
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      build:
        files: '<%= assetsPath %>/dest/js/main.min.js':'<%= assetsPath %>/dev/js/main.js'

    #压缩css
    cssmin:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      combine:
        files:
          '<%= assetsPath %>/dest/css/main.min.css': '<%= assetsPath %>/dev/css/main.css'

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
          '<%= assetsPath %>/dev/js/main.js': ['app/**/*.coffee', 'app/**/*.hbs']
        options:
          transform: ['coffeeify', 'hbsfy']

    #清空build目录
    clean:
      dist: [
        '<%= assetsPath %>/*'
      ]

  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'build', ['clean','browserify', 'uglify']
  grunt.registerTask 'default', 'build'