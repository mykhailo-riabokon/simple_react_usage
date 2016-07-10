class ES6App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    };
  }

  render() {
    const componentState = JSON.stringify(
      this.state, null, 4
    );

    return (
      <div>I am ES6 React component. This is my state
        <pre>
          {componentState}
        </pre>
      </div>
    );
  }
}

ES6App.propTypes = {
  counter: React.PropTypes.number
};

var ES5App = React.createClass({
  displayName: 'App',

  propTypes: {
    counter: React.PropTypes.number,
  },

  getInitialState: function () {
    return {
      counter: this.props.counter
    };
  },

  render: function () {
    var componentState = JSON.stringify(
      this.state, null, 4
    );

    return (
      <div>I am ES5 React component. This is my state
        <pre>
          {componentState}
        </pre>
      </div>
    );
  }
});

var App = (
  <div>
    <ES5App counter={10} />
    <ES6App counter={5} />
  </div>
);

ReactDOM.render(
  App,
  document.getElementById('app')
);
