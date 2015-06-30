var app = app || {};

(function () {
  'use strict';

  app.Item = React.createClass({

    handleClick: function (event) {
      event.preventDefault();

      console.log('go to detail');
    },

    render: function () {
      return (
        <tr>
          <td><a href="javascript:;" onClick={this.handleClick}>{this.props.data.email}</a></td>
          <td>{this.props.data.date}</td>
          <td>{this.props.data.address}</td>
        </tr>
      );
    }
  });
})();



