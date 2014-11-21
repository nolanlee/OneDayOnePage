var view = require('../view/index-view');
var model = require('../model/index-model');

module.exports = {
  init: function() {
    var content = JSON.stringify(new model());
    new view().render(content);
  }
};