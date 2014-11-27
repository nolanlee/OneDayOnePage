template = require 'template/index-template'

module.exports = ->
  @ele = document.querySelector '#container'

  @render = (content)->
    @ele.innerHTML = template(content)

  return