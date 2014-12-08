Chaplin = require 'chaplin'
IndexView = require 'views/index-view'
mediator =  require '../mediator'

module.exports = class HomeController extends Chaplin.Controller
  index: (params, route, options)->
    new IndexView
