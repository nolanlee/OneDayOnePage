view = require 'view/index-view'
model = require 'model/index-model'

module.exports =
  init: ->
    content = JSON.stringify new model()
    new view().render content