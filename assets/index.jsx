var App = React.createClass({
  displayName: 'App',

  // render is required method and should be defined in every React Component
  render: function () {
    return (
      <div className="wrapper">
        <div>This is my first React Component</div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
