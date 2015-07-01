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

  app.Model.prototype.inform = function (eventName) {
    Utils.store(this.key, this.datas);
    this.fireEvent(eventName);
  };

  app.Model.prototype.add = function (data) {
    this.datas = this.datas.concat(Utils.extend({
      id: Utils.uuid(),
      date: new Date().toLocaleDateString()
    }, data));

    this.inform('add');
  };

  app.Model.prototype.destroy = function (id) {
    this.datas = this.datas.filter(function (oldData) {
      return oldData.id !== id;
    });

    this.inform('destroy');
  };

  app.Model.prototype.save = function (id, attributes) {
    this.datas = this.datas.map(function (data) {
      return data.id !== id ? data : Utils.extend({}, attributes);
    });

    this.inform('save');
  };

})();
