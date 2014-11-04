var app = app || {};

(function ($) {
    app.ListView = Backbone.view.extend({
        el: '#list',

        template: _.template($('#list-template').html()),

        events: {

        },

        initialize: function () {

        }
    });
})(jQuery);