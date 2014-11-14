module.exports = class DetailView extends Chaplin.View
  el: '#detailPage'

  template: _.template $('#detail-template').html()

  events: 
    'submit form': 'save'
    'click #back': 'back'
    'change #switchAddr': 'switchAddress'

  initialize: ->
    @model = @model or new app.Detail() 
    @listenTo @model, 'invalid', @alert

  render: ->
    @$el.html @template(@model.toJSON())
    @$address = @$('#address')
    @$switchAddr = @$('#switchAddr')
    @$messages = @$('.msg')
    @form = @$('form')[0]
    return @

  save: (e)->
    e.preventDefault()
    @_cancelAlert()
    @model.set 'email', @form.email.value
    @model.set 'date', @form.date.value if @form.date.value
    if @form.switchAddr.checked  
      @model.set 'openAddr', @form.switchAddr.checked
    else 
      @model.unset('openAddr')
    @form.address.value = ''
    
    @model.set 'address', @form.address.value

    if @model.isValid()
      app.list.create @model
      @back()

  back: ->
    @$el.html ''
    app.list.trigger 'show'

  switchAddress: ->
    if @$switchAddr.prop 'checked'
      @$address.show()
    else
      @$address.hide()
      @$address.val ''

  alert: (model)->
    switch model.validationError
      when 'email' then @_alert @form.email, '非法邮箱'
      when 'date' then @_alert @form.date, '非法日期'
      when 'address' then @_alert @form.address, '地址不能为空'

  _alert: (inputElement, msg)->
    $(inputElement).parents '.form-group'
      .addClass 'has-error'
      .find '.msg'
      .text msg
      .removeClass 'msg-hidden'

  _cancelAlert: ->
    $('.msg').text('').addClass 'msg-hidden'
    $('.has-error').removeClass 'has-error'