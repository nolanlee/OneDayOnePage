module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    assetsPath: 'app/assets/js'

    browserify:
      dist:
        files:
          '<%= assetsPath %>/main.js': 'app/**/*.js'
      # alias: ['./app/config.coffee:config']
      # aliasMappings: [{
      #   cwd: 'app/controller'
      #   src: ['**/*.js']
      #   dest: 'controller'
      # }, {
      #   cwd: 'app/view'
      #   src: ['**/*.js']
      #   dest: 'view'
      # }]
        insertGlobals: true

    clean:
      dist: [
        '<%= assetsPath %>/*'
      ]

  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'default', ['clean', 'browserify']