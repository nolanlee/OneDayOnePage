Chaplin = require 'chaplin'
ItemView = require 'views/item-view'
DetailView  = require 'views/detail-view'

module.exports = class ListView extends Chaplin.CollectionView
  container: '#listPage'

  listSelector: '#list'

  # template: require 'templates/list-template'

  itemView: ItemView

  useCssAnimation: true

  events:
    'click #add': 'create'

  listen:
    'show collection': 'show'
    'add coolection': 'add'

  initialize: ->
    @$page = $('#listPage')
    @listenTo app.list, 'show', @show
    @listenTo app.list, 'add', @add

  render: ->
    super
    @addAll()

  show: ->
    @$el.show()

  hide: ->
    @$el.hide()

  add: (model) ->
    @listSelector.append new ItemView(model: model).render().el

  addAll: ->
    @listSelector.html ''
    app.list.each @add, @

  create: ->
    @hide()
    new DetailView().render()