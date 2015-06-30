var app = app || {};

(function () {
  'use strict';
  var Item = app.Item;

  var ENTER_KEY = 13;

  app.List = React.createClass({
    getInitialState: function () {
      return {
        nowShowing: app.ALL_TODOS,
        editing: null
      };
    },

    componentDidMount: function () {
      var setState = this.setState;
      var router = Router({
        '/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
        '/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
        '/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
      });
      router.init('/');
    },

    render: function() {
      var items = datas.map(function (data) {
        return (
          <Item data={data} />
        );
      });

      return (
        <button class="btn">新建</button>
        <table class="table">
          <thead>
            <tr>
              <th>邮箱</th>
              <th>日期</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody id="list">
            {{items}}
          </tbody>
        </table>
      );
    }
  });
})():