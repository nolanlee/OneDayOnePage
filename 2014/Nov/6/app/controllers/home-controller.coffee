Chaplin = require 'chaplin'
ListView = require 'views/list-view'
mediator =  require '../mediator'

module.exports = class Controller extends Chaplin.Controller
  index: (params, route, options)->
    new ListView
      collection: mediator.list
