var app = app || {};

(function ($) {
    app.ItemView = Backbone.View.extend({
        tagName: 'tr',

        template: _.template($('#item-template').html()),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'show', this.show);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
})(jQuery);