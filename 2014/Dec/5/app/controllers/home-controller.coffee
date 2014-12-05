Chaplin = require 'chaplin'
IndexView = require '../views/index-view'
mediator =  require '../mediator'

module.exports = class Controller extends Chaplin.Controller
  index: (params, route, options)->
    new IndexView
