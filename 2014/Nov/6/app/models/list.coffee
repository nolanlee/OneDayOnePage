Detail = require 'models/detail'
Chaplin = require 'chaplin'

module.exports = class List extends Chaplin.Collection
  model: Detail

  localStorage: new Backbone.LocalStorage('chaplin-example')

  filterWithoutAddress: ->
    return @where address: null
