var app = app || {};

(function ($) {
    app.ListView = Backbone.View.extend({
        el: '#listPage',

        template: _.template($('#list-template').html()),

        events: {
            'click #add': 'create'
        },

        initialize: function () {
            this.$page = $('#listPage');

            this.listenTo(app.list, 'all', this.render);
            this.listenTo(app.list, 'show', this.show);
            this.listenTo(app.list, 'add', this.add);
            this.listenTo(app.list, 'reset', this.addAll);

            this.render();          
        },

        render: function() {
            this.$page.html(this.template());
            this.$list = this.$('#list');
            app.list.fetch({reset: true});
            return this;
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide();
        },

        add: function(model) {
            this.$list.html('');
            this.$list.append(new app.ItemView({model: model}).render());
        },

        addAll: function() {
            app.list.each(this.add, this);
        },

        create: function() {
            this.hide();
            new app.DetailView().render();
        }
    });
})(jQuery);