var app = app || {};

(function ($) {
    app.DetailView = Backbone.View.extend({
        el: '#detailPage',

        template: _.template($('#detail-template').html()),

        events: {
            'submit form': 'save',
            'click #back': 'back',
            // TODO: 'remove #remove': 'remove',
            'change #switchAddr': 'switchAddress'
        },

        initialize: function () {     
            this.model = this.model || new app.Detail();       
            this.listenTo(this.model, 'invalid', this.alert);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$address = this.$('#address');
            this.$switchAddr = this.$('#switchAddr');
            this.$messages = this.$('.msg');
            this.form = this.$('form')[0];
            return this;
        },

        save: function(e) {
            e.preventDefault();
            this._cancelAlert();
            this.model.set('email', this.form.email.value);
            if(this.form.date.value) {
                this.model.set('date', this.form.date.value);
            }
            if(this.form.switchAddr.checked) {
                this.model.set('openAddr', this.form.switchAddr.checked);
            } else {
                this.model.unset('openAddr');
                this.form.address.value = '';
            }
            
            this.model.set('address', this.form.address.value);

            if(this.model.isValid()) {
                app.list.create(this.model);
                this.back();
            }
        },

        back: function() {
            this.$el.html('');
            app.list.trigger('show');
        },

        switchAddress: function() {
            if(this.$switchAddr.prop('checked')) {
                this.$address.show();
            } else {
                this.$address.hide();
                this.$address.val('');
            }
        },

        alert: function(model) {
            switch(model.validationError) {
                case 'email':
                    this._alert(this.form.email, '非法邮箱');
                    break;
                case 'date':
                    this._alert(this.form.date, '非法日期');
                    break;
                case 'address':
                    this._alert(this.form.address, '地址不能为空');
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

        _cancelAlert: function() {
            $('.msg').text('').addClass('msg-hidden');
            $('.has-error').removeClass('has-error');
        }
    });
})(jQuery);