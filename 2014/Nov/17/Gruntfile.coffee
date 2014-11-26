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
          ## Cannot work to coffeescript
          # preBundleCB: (b)->
          #   b.plugin remapify, [{
          #     src: '**/*.coffee'
          #     expose: 'view'
          #     cwd: './app/view'
          #   }, {
          #     src: '**/*.coffee'
          #     expose: 'controller'
          #     cwd: './app/controller'
          #   }, {
          #     src: '**/*.coffee'
          #     expose: 'model'
          #     cwd: './app/model'
          #   }]
          #   b.on 'remapify:files', (file, expandedAliases)->
          #     grunt.log.writeln "file: #{file}"
          #     grunt.log.writeln "expandedAliases: #{JSON.stringify(expandedAliases)}"
          aliasMappings: [{
            src: '**/*.coffee'
            dest: 'view'
            cwd: './app/view'
          }, {
            src: '**/*.coffee'
            dest: 'controller'
            cwd: './app/controller'
          }, {
            src: '**/*.coffee'
            dest: 'model'
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