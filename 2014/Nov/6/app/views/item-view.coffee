Chaplin = require 'chaplin'

module.exports = class ItemView extends Chaplin.View
  tagName: 'tr'

  events:
    'click a': 'detail'

  template: require 'templates/item-template'

  initialize: ->
    @listenTo @model, 'change', @render
    @listenTo @model, 'show', @show

  render: ->
    @$el.html @template @model.toJSON()

  detail: ->
    app.indexView.hide()
    new app.DetailView({model: @model}).render()
