var app = app || {};

(function () {
  'use strict';

  var Utils = app.Utils;
 
  app.Model = function (key) {
    this.key = key;
    this.datas = Utils.store(key);
  };

  app.Model.prototype = new EventManager();

  app.Model.prototype.validate = function(attributes) {
    if (!(/^[a-z0-9]+@[a-z0-9]/gi.test(attributes.email))) {
      return 'email';
    } else if (Number.isNaN(Date.parse(attributes.date))) {
      return 'date';
    } else if (attributes.openAddr && !attributes.address) {
      return 'address';
    }
  };

  app.TodoModel.prototype.subscribe = function (onChange) {
    this.attachEvent('change', onChange);
  };

  app.Model.prototype.inform = function () {
    Utils.store(this.key, this.datas);
    this.fireEvent('change');
  };

  app.Model.prototype.add = function (data) {
    this.datas = this.datas.concat(Utils.extend({
      id: Utils.uuid(),
      date: new Date().toLocaleDateString()
    }, data);

    this.inform();
  };

  app.Model.prototype.destroy = function (id) {
    this.datas = this.datas.filter(function (oldData) {
      return oldData.id !== id;
    });

    this.inform();
  };

  app.Model.prototype.save = function (id, attributes) {
    this.datas = this.datas.map(function (data) {
      return data.id !== id ? data : Utils.extend({}, attributes);
    });

    this.inform();
  };

})();
