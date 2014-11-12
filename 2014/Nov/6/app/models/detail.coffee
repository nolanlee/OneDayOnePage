module.exports = class Detail extends Chaplin.module
  defaults:
    email: null
    date: new Date().toLocaleDateString()
    address: null

  validate: (attrs, options) ->
    switch attrs
      when not /^[a-z0-9]+@[a-z0-9]/gi.test attrs.email then return 'email'
      when Number.isNaN(Date.parse attrs.date) then return 'date'
      when attrs.openAddr and not attrs.address then return 'address'