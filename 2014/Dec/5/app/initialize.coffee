Backbone = require 'backbone'
Backbone.$ = $
App = require './application'
routes = require './routes'

$ ->
  new App
    title: 'Hello World With Chaplin'
    controllerSuffix: '-controller'
    pushState: no
    routes: routes 