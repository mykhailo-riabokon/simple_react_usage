var IncreaseCounter = React.createClass({
  displayName: 'IncreaseCounter',

  contextTypes: {
    increaseCounter: React.PropTypes.func
  },

  render: function () {
    return (
      <button onClick={this.context.increaseCounter}>Increase</button>
    );
  }
});

//
// function IncreaseCounter(props, context) {
//   return <button onClick={context.increaseCounter}>Increase</button>;
// }
//
// IncreaseCounter.contextTypes = {
//   increaseCounter: React.PropTypes.func
// };


var App = React.createClass({
  displayName: 'App',

  childContextTypes: {
    increaseCounter: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      increaseCounter: this.increaseCounter
    };
  },

  getInitialState: function () {
    return {
      counter: 0
    };
  },

  increaseCounter: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  render: function () {
    return (
      <div className="wrapper">
        <p>Current state of counter is {this.state.counter}</p>
        <IncreaseCounter />
      </div>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
