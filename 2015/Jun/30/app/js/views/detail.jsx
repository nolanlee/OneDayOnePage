var app = app || {};

(function () {
  'use strict';

  app.Detail = React.createClass({
    handleToggleAddr: function (event) {
      console.log('go to toggle');
    },

    handleSubmit: function (event) {
      console.log('go to submit');
    },

    handleBack: function (event) {
      console.log('go to back');
    },

    render: function () {
      return (
        <form role="form" class="form-horizontal col-md-offset-2 col-md-8">
          <div class="form-group">
            <label for="email" class="col-md-2 control-label request">邮箱：</label>
            <div class="col-md-6">
              <input type="text" class="form-control">
            </div>
            <div class="col-md-2">
              <label class="msg msg-hidden control-label"></label>
            </div>
            </div>
          <div class="form-group">
            <label for="date" class="col-md-2 control-label">日期：</label>
            <div class="col-md-6">
              <input type="date" class="form-control">
            </div>
            <div class="col-md-2">
              <label class="msg msg-hidden control-label"></label>
            </div>
          </div>
          <div class="form-group">
            <label for="address" class="col-md-2 control-label">地址：</label>
            <div class="col-md-6">
              <label for="switchAddr" class="control-label">开启
                <input type="checkbox" checked onClick={this.handleToggleAddr}>
              </label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-2">
              <label class="msg msg-hidden control-label"></label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-2 col-md-1">
              <input type="submit" class="btn btn-primary" name="提交" onClick={this.handleSubmit}>
            </div>
            <div class="col-md-1">
              <button class="btn" onClick={this.handleBack}>返回</button>
            </div>
          </div>
        </form>
      );
    }
  });
})();



