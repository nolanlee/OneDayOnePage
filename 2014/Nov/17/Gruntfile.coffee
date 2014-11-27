remapify = require 'remapify'

module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/js'

    browserify:
      dist:
        files:
          '<%= assetsPath %>/main.js': ['app/**/*.coffee', 'app/**/*.hbs']
        options:
          transform: ['coffeeify', 'hbsfy']

          browserifyOptions: 
            extensions: ['.coffee', '.hbs']
            # ignoreMissing: true
            require: './app/assets/external.js'

          alias:
            './app/assets/external.js:external'

          preBundleCB: (b)->
            b.plugin remapify, [{
              src: '**/*.coffee'
              expose: 'view'
              cwd: './app/view'
            }, {
              src: '**/*.hbs'
              expose: 'template'
              cwd: './app/view/template'
            }, {
              src: '**/*.coffee'
              expose: 'controller'
              cwd: './app/controller'
            }, {
              src: '**/*.coffee'
              expose: 'model'
              cwd: './app/model'
            }]

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