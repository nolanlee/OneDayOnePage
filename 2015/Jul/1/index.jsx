var Btn = React.createClass({
  getInitialState: function () {
    return {
      state: 'default'
    };
  },
  handleClick: function (event) {
    this.setState({
      state: 'error'
    });
    alert('Hi, ' + this.props.text);
  },
  render: function () {
    return (
      <button className={this.state.state} onClick={this.handleClick}>{this.props.text}</button>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <p>
        <Btn text='hello' />
      </p>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);