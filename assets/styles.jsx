var App = React.createClass({
  displayName: 'App',

  render: function () {
    var styles = {
      'backgroundColor': '#fefefe',
      'color': '#333',
    };

    return (
      <div className="wrapper" style={styles}>
        <div>This is my first React Component</div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
