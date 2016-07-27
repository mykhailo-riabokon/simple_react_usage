class App extends React.Component {

  render() {
    return (
      <Modal isShown={true}>
        <h1>Some modal content</h1>
      </Modal>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
