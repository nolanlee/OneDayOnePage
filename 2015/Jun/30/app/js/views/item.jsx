var app = app || {};

(function () {
  'use strict';

  app.Item = React.createClass({
    navToDetail: function (event) {
      event.preventDefault();
      app.mediator.fireEvent('detail', this.props.data.id);
      console.log('go to detail');
    },

    render: function () {
      return (
        <tr>
          <td><a href="javascript:;" onClick={this.navToDetail}>{this.props.data.email}</a></td>
          <td>{this.props.data.date}</td>
          <td>{this.props.data.address}</td>
        </tr>
      );
    }
  });
})();