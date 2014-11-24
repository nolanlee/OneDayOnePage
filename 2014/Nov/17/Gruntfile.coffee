module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/js'

    browserify:
      dist:
        files:
          '<%= assetsPath %>/main.js': 'app/**/*.coffee'
          # '<%= assetsPath %>/main.js': 'app/**/*.coffee'
        options:
          transform: ['coffeeify']
        #   extensions: ['.coffee']
        #   aliasMappings: [{
        #     wd: 'app/view'
        #     src: ['**/*.coffee']
        #     dest: 'view'
        #   }, {
        #     wd: 'app/controller'
        #    src: ['**/*.coffee']
        #     dest: 'model'
        #       src: ['**/*.coffee']
        #     dest: 'controller'
        #   }, {
        #     wd: 'app/model'
        #  }]
        # options:
        #   aliasMappings: [{
        #     wd: 'app/view'
        #     src: ['**/*.js']
        #     dest: 'view'
        #   }, {
        #     wd: 'app/controller'
        #     src: ['**/*.js']
        #     dest: 'controller'
        #   }, {
        #     wd: 'app/model'
        #     src: ['**/*.js']
        #     dest: 'model'
        #   }]

    clean:
      dist: [
        '<%= assetsPath %>/*'
      ]

    coffeelint:
      app: ['app/**/*.coffee']

  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-coffeelint'

  grunt.registerTask 'default', ['clean', 'coffeelint', 'browserify']