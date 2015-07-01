var app = app || {};

(function () {
  'use strict';
  var List = app.List;
  var Detail = app.Detail;
  var model = app.model = new app.Model('react-LID');
  app.mediator = new EventManager();

  var App = React.createClass({
    getInitialState: function () {
      return {
        currentView: 'list'
      };
    },

    navToCreate: function() {
      app.mediator.fireEvent('create');
      console.log('go to create');
    },

    render: function() {
      switch(this.state.currentView) {
        case 'list':
          return (
            <div>
              <button className="btn" onClick={this.navToCreate}>新建</button>
              <List model={this.props.model} />
            </div>
          );
        case 'create':
          return ( <Detail /> );
        case 'detail':
          return ( <Detail detail={this.props.detail}/> );
      }
    }
  });

  var init = function () {
    return React.render(
      <App model={model} />,
      document.getElementById('app')
    );
  }

  var appInstance = init();

  app.mediator.attachEvent('create', function() {
    appInstance.setState({currentView: 'create'});
  });
  app.mediator.attachEvent('list', function() {
    appInstance.setState({currentView: 'list'});
  });
  app.mediator.attachEvent('detail', function(id) {
    appInstance.setState({currentView: 'detail'});
    appInstance.setProps({
      detail: app.model.datas.filter(function(data) {
        return data.id === id;
      })[0]
    })
  });

})();