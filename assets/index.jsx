// ES5
var App = React.createClass({
  displayName: 'App',

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
