detail = require detail

module.exports = class list extends Chaplin.Collection
  model: detail

  localStorage: new Backbone.LocalStorage('backbone-example')

  filterWithoutAddress: ->
    return @where address: null
