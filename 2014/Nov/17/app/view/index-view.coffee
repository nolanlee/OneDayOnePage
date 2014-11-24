module.exports = ->
  @ele = document.querySelector '#container'

  @render = (content)->
    @ele.innerHTML = content

  return