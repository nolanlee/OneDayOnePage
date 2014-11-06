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

            this.listenTo(app.list, 'show', this.show);
            this.listenTo(app.list, 'add', this.add);                   
        },

        render: function() {
            this.$page.html(this.template());
            this.$list = this.$('#list');
            this.addAll();
            return this;
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide();
        },

        add: function(model) {           
            this.$list.append(new app.ItemView({model: model}).render().el);
        },

        addAll: function() {
            this.$list.html('');
            app.list.each(this.add, this);
        },

        create: function() {
            this.hide();
            new app.DetailView().render();
        }
    });
})(jQuery);