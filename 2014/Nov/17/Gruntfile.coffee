module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/js'

    browserify:
      dist:
        files:
          '<%= assetsPath %>/main.js': 'app/**/*.coffee'
        options:
          transform: ['coffeeify']
          extensions: ['.coffee']
          aliasMappings: [{
            wd: 'app/view'
            src: ['**/*.coffee']
            dest: 'view'
          }, {
            wd: 'app/controller'
            src: ['**/*.coffee'] 
            dest: 'controller'
          }, {
            wd: 'app/model'
            src: ['**/*.coffee']
            dest: 'model'           
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