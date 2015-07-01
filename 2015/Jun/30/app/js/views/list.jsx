var app = app || {};

(function () {
  'use strict';
  var Item = app.Item;

  app.List = React.createClass({
    render: function() {
      var items = this.props.model.datas.map(function (data) {
        return (
          <Item data={data} />
        );
      }, this);

      return (
        <table className="table">
          <thead>
            <tr>
              <th>邮箱</th>
              <th>日期</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      );
    }
  });
})();