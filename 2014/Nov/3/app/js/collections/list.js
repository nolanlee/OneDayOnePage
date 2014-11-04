var app = app || {};

(function () {
    var List = Backbone.Collection.extend({
        model: app.Detail,

        localStorage: new Backbone.LocalStorage('backbone-example'),

        filterWithoutAddress: function() {
            return this.where({address: null});
        }

    });

    app.list = new List();
})();
