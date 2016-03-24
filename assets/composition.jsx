function Button(props) {
  function onButtonClick(event) {
    event.preventDefault();

    console.log('Default click');

    props.onClick(event);
  }

  return <button onClick={onButtonClick} style={props.style}>Click me</button>;
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  style: React.PropTypes.object
};

Button.defaultProps = {
  onClick: function () {},
  style: {}
};


function RedButton() {
  var styles = {
    backgroundColor: 'red'
  };

  function onRedButtonClick() {
    console.log('Red button click');
  }

  return <Button onClick={onRedButtonClick} style={styles}/>;
}

var App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div className="wrapper">
        <Button />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
