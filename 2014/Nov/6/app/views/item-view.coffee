Chaplin = require 'chaplin'

module.exports = class ItemView extends Chaplin.View
  tagName: 'tr'

  events:
    'click a': 'detail'

  # template: require 'templates/item-template'

  # Backbone 把listen放在initialize
  listen:
    'change model': 'render'
    'show model': 'show'

  detail: ->
    app.indexView.hide()
    new app.DetailView({model: @model}).render()
