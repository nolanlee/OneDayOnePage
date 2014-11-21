detail = require './detail'
Backbone = require 'backbone'

module.exports = class List extends Chaplin.Collection
  model: detail

  localStorage: new Backbone.LocalStorage('backbone-example')

  filterWithoutAddress: ->
    return @where address: null
