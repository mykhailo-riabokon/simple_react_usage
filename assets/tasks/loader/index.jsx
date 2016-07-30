

class App extends React.Component {

  switchLoader(){
    this.refs.loader.switchLoading();
  }

  render() {
    return (
      <div className="ui container">
        <h1>This is React Semantic UI loader</h1>
        <button className="ui primary button" onClick={this.switchLoader.bind(this)}>
          Load
        </button>
        <Loader ref="loader" isShown={false} loadingText="Loading"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
