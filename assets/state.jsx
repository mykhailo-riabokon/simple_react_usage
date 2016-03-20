var List = React.createClass({
  displayName: 'List',

  propTypes: {
    listLength: React.PropTypes.number,
  },

  getListItems: function () {
    var result = [];

    for (var i = 0; i < this.props.listLength; i++) {
      result.push(
        <li key={i}>List item {i}</li>
      );
    }

    return result;
  },

  render: function () {
    return (
      <ul>
        { this.getListItems() }
      </ul>
    );
  }
});

var App = React.createClass({
  displayName: 'App',

  getInitialState: function () {
    return {
      listLength: 15
    };
  },

  render: function () {
    return (
      <div className="wrapper">
        <div>This is my first React Component</div>
        <List listLength={this.state.listLength}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
