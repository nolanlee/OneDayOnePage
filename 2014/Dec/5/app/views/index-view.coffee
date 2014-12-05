Chaplin = require 'chaplin'

module.exports = class ItemView extends Chaplin.View

  autoRender: true

  container: '#container'

  template: require './templates/index-template'
