App = require 'application'
routes = require './routes'

$ ->
  new App
    title: 'Form & List with Chaplin'
    controllerSuffix: '-controller'
    pushState: no
    routes: routes