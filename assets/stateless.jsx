function List({ listLength }) {
  function getListItems() {
    var result = [];

    for (var i = 0; i < listLength; i++) {
      result.push(
        <li key={i}>List item {i}</li>
      );
    }

    return result;
  }

  return (
    <ul>
      { getListItems() }
    </ul>
  );
}

List.propTypes = {
  listLength: React.PropTypes.number,
};

var App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div className="wrapper">
        <div>This is my first React Component</div>
        <List listLength={10}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
