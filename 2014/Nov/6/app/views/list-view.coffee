Chaplin = require 'chaplin'

module.exports = class ListView extends Chaplin.CollectionView
  id: 'listPage'

  template: require 'templates/list-template'

  events:
    'click #add': 'create'

  initialize: ->
    @$page = $('#listPage')
    @listenTo app.list, 'show', @show
    @listenTo app.list, 'add', @add

  render: ->
    @$page.html @template()
    @$list = @$('#list')
    @addAll()
    return this

  show: ->
    @$el.show()

  hide: ->
    @$el.hide()

  add: (model) ->
    @$list.append new app.ItemView(model: model).render().el

  addAll: ->
    @$list.html ''
    app.list.each @add, @

  create: ->
    @hide()
    new app.DetailView().render()