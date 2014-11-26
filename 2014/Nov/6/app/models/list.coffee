detail = require 'models/detail'
Chaplin = require 'chaplin'

module.exports = class List extends Chaplin.Collection
  model: detail

  localStorage: new Backbone.LocalStorage('backbone-example')

  filterWithoutAddress: ->
    return @where address: null
