class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="ui container dimer">
        <h1>This is React Semantic UI loader</h1>
        <Loader isShown={true} loadingText="Loading" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
