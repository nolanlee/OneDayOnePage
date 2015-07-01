var app = app || {};

(function () {
  'use strict';

  app.Detail = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      console.log(this.props.detail);
      return {
        email: this.props.detail ? this.props.detail.email : '',
        date: this.props.detail ? this.props.detail.date : '',
        address: this.props.detail ? this.props.detail.address : '',
        openAddr: this.props.detail ? this.props.detail.openAddr : false
      };
    },

    handleToggleAddr: function (event) {
      console.log('go to toggle');
    },

    handleSubmit: function (event) {
      event.preventDefault();
      var form = event.target;
      var data = {
        email: form.querySelector('[type=email]').value,
        date: form.querySelector('[type=date]').value,
        address: form.querySelector('[type=address]').value
      };
      if(this.props.detail) {
        app.model.save(this.props.detail.id, data);
      } else {
        app.model.add(data);
      }
      app.mediator.fireEvent('list');
      console.log('go to submit');
    },

    handleBack: function (event) {
      event.preventDefault();
      app.mediator.fireEvent('list');
      console.log('go to back');
    },

    render: function () {
      return (
        <form role="form" className="form-horizontal col-md-offset-2 col-md-8" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="col-md-2 control-label request">邮箱：</label>
            <div className="col-md-6">
              <input type="email" className="form-control" valueLink={this.linkState('email')} />
            </div>
            <div className="col-md-2">
              <label className="msg msg-hidden control-label"></label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="date" className="col-md-2 control-label">日期：</label>
            <div className="col-md-6">
              <input type="date" className="form-control" valueLink={this.linkState('date')} />
            </div>
            <div className="col-md-2">
              <label className="msg msg-hidden control-label"></label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="col-md-2 control-label">地址：</label>
            <div className="col-md-6">
              <label htmlFor="switchAddr" className="control-label">开启
                <input type="checkbox" checkedLink={this.linkState('openAddr')} />
              </label>
              <input type="address" className="form-control" valueLink={this.linkState('address')} />
            </div>
            <div className="col-md-2">
              <label className="msg msg-hidden control-label"></label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-1">
              <input type="submit" className="btn btn-primary" name="提交" />
            </div>
            <div className="col-md-1">
              <button className="btn" onClick={this.handleBack}>返回</button>
            </div>
          </div>
        </form>
      );
    }
  });
})();