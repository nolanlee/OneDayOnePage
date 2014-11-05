var app = app || {};

(function () {
    var Router = Backbone.Router.extend({
        routes: {
            'add': 'add'
        },

        add: function (param) {
            new app.DetailView().render();
        }
    });

    app.Router = new Router();
    Backbone.history.start();
})();
