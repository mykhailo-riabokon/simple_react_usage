// ES6
// class App extends React.Component {
//   render() {
//     return (
//       <div>This is my first React Component</div>
//     );
//   }
// }

// ES5
const App = React.createClass({
  render: function () {
    return (
      <div>This is my first React Component</div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
