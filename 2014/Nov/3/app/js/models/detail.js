var app = app || {};

(function () {
    app.Detail = Backbone.Model.extend({
        defaults: {
            data: new Date().toLocaleDateString(),
            address: null
        },

        validate: function(attrs, options) {
            if (!(/^[a-z0-9]+@[a-z0-9]/gi.test(attrs.email)) {
                return 'email';
            } else if (Number.isNaN(Date.parse(attrs.date))) {
                return 'date';
            }
        }
    });
})();
