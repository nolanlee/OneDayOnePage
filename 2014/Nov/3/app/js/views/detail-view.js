var app = app || {};

(function ($) {
    app.DetailView = Backbone.view.extend({
        el: '#detail',

        template: _.template($('#detail-template').html()),

        events: {
            'submit #submit': 'save',
            // TODO: 'remove #remove': 'remove',
            'change #switchAddr': 'switchAddress'
        },

        initialize: function () {
            this.form = this.$('form')[0];
            this.$address = this.$('#address');
            this.$switchAddr = this.$('#switchAddr');
            this.$messages = this.$('.msg');

            this.listenTo(this.model, 'invalid', this.alert);
        },

        save: function(e) {
            app.list.add({
                email: this.form.email.value,
                date: this.form.date.value,
                address: this.form.address.value
            });
        },

        switchAddress: function() {
            if(this.$switchAddr.prop('checked')) {
                this.$address.show();
            } else {
                this.$address.hide();
            }
        },

        alert: function(error) {
            switch(error) {
                case 'email':
                    this._alert(this.form.email, '非法邮箱');
                    break;
                case 'date':
                    this._alert(this.form.date, '非法日期');
                    break;
            }
        },

        _alert: function(inputElement, msg) {
            $(inputElement).parents('.form-group')
                .addClass('has-error')
                .find('.msg')
                .text(msg)
                .removeClass('msg-hidden');
        },

        _cancelAlert: function(inputElement) {
            $('.msg').text('').removeClass('msg-hidden');
            $('.has-error').removeClass('has-error');
        }
    });
})(jQuery);