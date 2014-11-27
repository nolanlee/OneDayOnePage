view = require 'view/index-view'
model = require 'model/index-model'

module.exports =
  init: ->
    new view().render new model()